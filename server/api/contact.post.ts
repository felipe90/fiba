import { defineEventHandler, readBody, createError } from 'h3'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string({
    required_error: 'El nombre es obligatorio'
  }).trim().min(2, 'El nombre debe tener al menos 2 caracteres').max(100, 'El nombre no puede exceder 100 caracteres'),
  email: z.string({
    required_error: 'El correo electrónico es obligatorio'
  }).trim().email('Correo electrónico no válido'),
  phone: z.string().trim().max(30, 'El teléfono no puede exceder 30 caracteres').optional().or(z.literal('')),
  subject: z.string({
    required_error: 'El asunto es obligatorio'
  }).trim().min(2, 'El asunto es requerido').max(100, 'El asunto no puede exceder 100 caracteres'),
  message: z.string({
    required_error: 'El mensaje es obligatorio'
  }).trim().min(10, 'El mensaje debe tener al menos 10 caracteres').max(2000, 'El mensaje no puede exceder 2000 caracteres'),
  honeypot: z.string().optional().or(z.literal(''))
})

const sanitize = (text: string): string => {
  return text.replace(/<[^>]*>?/gm, '').trim()
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // 1. Honeypot check: silently succeed if spam bot filled out hidden field
  if (body?.honeypot && String(body.honeypot).trim() !== '') {
    console.warn('[Honeypot Triggered] Ignored spam submission.')
    return {
      success: true,
      message: 'Mensaje recibido exitosamente.'
    }
  }

  // 2. Validate payload against Zod schema
  const parseResult = contactSchema.safeParse(body)
  if (!parseResult.success) {
    const firstError = parseResult.error.errors[0]?.message || 'Datos del formulario no válidos'
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: firstError,
      data: parseResult.error.flatten()
    })
  }

  const { name, email, phone, subject, message } = parseResult.data

  // 3. Text sanitization
  const cleanData = {
    name: sanitize(name),
    email: sanitize(email),
    phone: phone ? sanitize(phone) : '',
    subject: sanitize(subject),
    message: sanitize(message),
    receivedAt: new Date().toISOString()
  }

  // 4. Server logging
  console.info(`[Contact Form] Submission from "${cleanData.name}" <${cleanData.email}> - Subject: ${cleanData.subject}`)

  // In production / Phase 2: forward to email provider (Resend, SendGrid, etc.) or Strapi webhook.
  return {
    success: true,
    message: 'Gracias por ponerte en contacto con FIBA. Te responderemos a la mayor brevedad posible.',
    data: {
      receivedAt: cleanData.receivedAt
    }
  }
})
