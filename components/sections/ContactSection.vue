<script setup lang="ts">
import { useContact } from '~/composables/useContact'
import { ORGANIZATION_INFO } from '~/constants/content'
import AppCard from '~/components/ui/AppCard.vue'
import AppBadge from '~/components/ui/AppBadge.vue'
import AppButton from '~/components/ui/AppButton.vue'

const {
  form,
  isSubmitting,
  isSuccess,
  errorMessage,
  fieldErrors,
  submitContact,
  resetForm
} = useContact()
</script>

<template>
  <section id="contacto" class="py-24 bg-fiba-surface-50 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
        <AppBadge variant="primary" size="md" class="mb-4">
          Comunícate con FIBA
        </AppBadge>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-fiba-primary-900 mb-6">
          Conversemos y Construyamos Alianzas
        </h2>
        <p class="text-base sm:text-lg text-fiba-text-secondary leading-relaxed font-light">
          ¿Tienes preguntas, deseas voluntariar, proponer un proyecto comunitario o vincular a tu institución? Escríbenos directamente.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        <!-- Contact Information Column -->
        <div class="lg:col-span-5 space-y-6">
          <AppCard variant="crimson" padding="lg">
            <h3 class="text-2xl font-serif font-bold text-white mb-6">
              Fundación Bellas Artes Integra
            </h3>

            <div class="space-y-5 text-sm text-fiba-surface-200">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5 text-fiba-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span class="block text-xs uppercase text-fiba-accent-300 font-semibold">Sede Principal</span>
                  <p class="mt-0.5 text-white">{{ ORGANIZATION_INFO.contact.address }}</p>
                  <p class="text-xs text-fiba-surface-300">{{ ORGANIZATION_INFO.contact.city }}, {{ ORGANIZATION_INFO.contact.country }}</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5 text-fiba-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span class="block text-xs uppercase text-fiba-accent-300 font-semibold">Correo Institucional</span>
                  <a :href="`mailto:${ORGANIZATION_INFO.contact.email}`" class="text-white hover:text-fiba-accent-300 transition-colors">
                    {{ ORGANIZATION_INFO.contact.email }}
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5 text-fiba-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span class="block text-xs uppercase text-fiba-accent-300 font-semibold">Teléfono / WhatsApp</span>
                  <p class="text-white">{{ ORGANIZATION_INFO.contact.phone }}</p>
                </div>
              </div>
            </div>

            <div class="mt-8 pt-6 border-t border-white/20">
              <p class="text-xs text-fiba-surface-300 leading-relaxed">
                Horario de atención administrativa: Lunes a Viernes de 8:30 a.m. a 4:30 p.m. (Hora de Panamá).
              </p>
            </div>
          </AppCard>
        </div>

        <!-- Inbound Contact Form -->
        <div class="lg:col-span-7">
          <AppCard variant="default" padding="lg">
            <form @submit.prevent="submitContact" class="space-y-6">
              <!-- Honeypot invisible protection field -->
              <input
                v-model="form.honeypot"
                type="text"
                name="organization_fax_ref"
                tabindex="-1"
                autocomplete="off"
                class="hidden"
                aria-hidden="true"
              >

              <!-- Success Alert -->
              <div
                v-if="isSuccess"
                class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3"
                role="alert"
              >
                <svg class="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 class="font-bold text-sm">¡Mensaje enviado con éxito!</h4>
                  <p class="text-xs mt-1">Gracias por ponerte en contacto. Nuestro equipo revisará tu mensaje y responderá a la brevedad posible.</p>
                  <button
                    type="button"
                    class="mt-2 text-xs font-semibold text-emerald-700 underline"
                    @click="resetForm(); isSuccess = false"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              </div>

              <!-- Error Alert -->
              <div
                v-if="errorMessage"
                class="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3"
                role="alert"
              >
                <svg class="w-5 h-5 text-red-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 class="font-bold text-sm">No pudimos enviar tu mensaje</h4>
                  <p class="text-xs mt-1">{{ errorMessage }}</p>
                </div>
              </div>

              <!-- Input: Name & Email -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label for="name" class="block text-xs font-semibold text-fiba-text-primary uppercase tracking-wide mb-1.5">
                    Nombre Completo <span class="text-fiba-primary-600">*</span>
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Ej. Sofia Villarreal"
                    class="w-full px-4 py-2.5 rounded-xl border border-fiba-surface-300 focus:border-fiba-primary-600 focus:ring-1 focus:ring-fiba-primary-600 text-sm bg-white"
                    :class="{ 'border-red-500 ring-1 ring-red-500': fieldErrors.name }"
                  >
                  <p v-if="fieldErrors.name" class="mt-1 text-xs text-red-600">{{ fieldErrors.name }}</p>
                </div>

                <div>
                  <label for="email" class="block text-xs font-semibold text-fiba-text-primary uppercase tracking-wide mb-1.5">
                    Correo Electrónico <span class="text-fiba-primary-600">*</span>
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="ejemplo@correo.com"
                    class="w-full px-4 py-2.5 rounded-xl border border-fiba-surface-300 focus:border-fiba-primary-600 focus:ring-1 focus:ring-fiba-primary-600 text-sm bg-white"
                    :class="{ 'border-red-500 ring-1 ring-red-500': fieldErrors.email }"
                  >
                  <p v-if="fieldErrors.email" class="mt-1 text-xs text-red-600">{{ fieldErrors.email }}</p>
                </div>
              </div>

              <!-- Input: Phone & Subject -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label for="phone" class="block text-xs font-semibold text-fiba-text-primary uppercase tracking-wide mb-1.5">
                    Teléfono / WhatsApp (Opcional)
                  </label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    placeholder="+507 6000-0000"
                    class="w-full px-4 py-2.5 rounded-xl border border-fiba-surface-300 focus:border-fiba-primary-600 focus:ring-1 focus:ring-fiba-primary-600 text-sm bg-white"
                  >
                </div>

                <div>
                  <label for="subject" class="block text-xs font-semibold text-fiba-text-primary uppercase tracking-wide mb-1.5">
                    Asunto <span class="text-fiba-primary-600">*</span>
                  </label>
                  <input
                    id="subject"
                    v-model="form.subject"
                    type="text"
                    required
                    placeholder="Ej. Alianza comunitaria / Donación"
                    class="w-full px-4 py-2.5 rounded-xl border border-fiba-surface-300 focus:border-fiba-primary-600 focus:ring-1 focus:ring-fiba-primary-600 text-sm bg-white"
                    :class="{ 'border-red-500 ring-1 ring-red-500': fieldErrors.subject }"
                  >
                  <p v-if="fieldErrors.subject" class="mt-1 text-xs text-red-600">{{ fieldErrors.subject }}</p>
                </div>
              </div>

              <!-- Input: Message -->
              <div>
                <label for="message" class="block text-xs font-semibold text-fiba-text-primary uppercase tracking-wide mb-1.5">
                  Mensaje <span class="text-fiba-primary-600">*</span>
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  required
                  placeholder="Escribe tu consulta o propuesta..."
                  class="w-full px-4 py-2.5 rounded-xl border border-fiba-surface-300 focus:border-fiba-primary-600 focus:ring-1 focus:ring-fiba-primary-600 text-sm bg-white"
                  :class="{ 'border-red-500 ring-1 ring-red-500': fieldErrors.message }"
                />
                <p v-if="fieldErrors.message" class="mt-1 text-xs text-red-600">{{ fieldErrors.message }}</p>
              </div>

              <div class="flex items-center justify-between pt-2">
                <p class="text-xs text-fiba-text-muted">
                  Campos marcados con <span class="text-fiba-primary-600">*</span> son obligatorios.
                </p>

                <AppButton
                  type="submit"
                  variant="primary"
                  size="md"
                  :loading="isSubmitting"
                  :disabled="isSubmitting"
                >
                  Enviar Mensaje
                </AppButton>
              </div>
            </form>
          </AppCard>
        </div>
      </div>
    </div>
  </section>
</template>
