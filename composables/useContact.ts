import { ref, reactive } from 'vue'
import type { ContactPayload, ApiResponse } from '~/types/content'

export const useContact = () => {
  const form = reactive<ContactPayload>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    honeypot: ''
  })

  const isSubmitting = ref(false)
  const isSuccess = ref(false)
  const errorMessage = ref<string | null>(null)
  const fieldErrors = ref<Record<string, string>>({})

  const validateClient = (): boolean => {
    fieldErrors.value = {}
    let isValid = true

    if (!form.name.trim()) {
      fieldErrors.value.name = 'El nombre completo es requerido'
      isValid = false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.email.trim()) {
      fieldErrors.value.email = 'El correo electrónico es requerido'
      isValid = false
    } else if (!emailRegex.test(form.email.trim())) {
      fieldErrors.value.email = 'Introduce un correo electrónico válido'
      isValid = false
    }

    if (!form.subject.trim()) {
      fieldErrors.value.subject = 'El asunto es requerido'
      isValid = false
    }

    if (!form.message.trim()) {
      fieldErrors.value.message = 'El mensaje no puede estar vacío'
      isValid = false
    } else if (form.message.trim().length < 10) {
      fieldErrors.value.message = 'El mensaje debe contener al menos 10 caracteres'
      isValid = false
    }

    return isValid
  }

  const resetForm = () => {
    form.name = ''
    form.email = ''
    form.phone = ''
    form.subject = ''
    form.message = ''
    form.honeypot = ''
    fieldErrors.value = {}
  }

  const submitContact = async (): Promise<boolean> => {
    errorMessage.value = null
    isSuccess.value = false

    if (!validateClient()) {
      return false
    }

    isSubmitting.value = true

    try {
      const response = await $fetch<ApiResponse>('/api/contact', {
        method: 'POST',
        body: form
      })

      if (response.success) {
        isSuccess.value = true
        resetForm()
        return true
      } else {
        errorMessage.value = response.message || 'Ocurrió un error al procesar el mensaje.'
        return false
      }
    } catch (err: unknown) {
      const fetchError = err as { data?: { message?: string } }
      errorMessage.value = fetchError?.data?.message || 'Error de conexión. Inténtalo de nuevo más tarde.'
      return false
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    form,
    isSubmitting,
    isSuccess,
    errorMessage,
    fieldErrors,
    submitContact,
    resetForm
  }
}
