<script setup lang="ts">
import { useContact } from '~/composables/useContact'
import { DONATION_CONFIG } from '~/constants/content'

const handleCopyYappy = () => {
  navigator.clipboard.writeText('@fundacionfiba')
}

const {
  form,
  isSubmitting,
  isSuccess,
  errorMessage,
  submitContact
} = useContact()
</script>

<template>
  <section id="donaciones" class="py-24 bg-[var(--color-warm-ivory)] relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-bold burgundy bg-[var(--color-burgundy)]/50 border border-[var(--color-burgundy)]/80 mb-4 shadow-xs">
          <span class="text-xs font-semibold uppercase tracking-widest text-[var(--color-burgundy)-800]">Donaciones</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-burgundy)-900] mb-6 tracking-tight">
          Acompaña nuestra misión
        </h2>
        <p class="text-base sm:text-lg text-[text-secondary] leading-relaxed font-light">
          Tu contribución financia materiales y formación artística directa para niños y comunidades en Panamá.
        </p>
      </div>

      <!-- Bank Transfer Details -->
      <div class="bg-[var(--color-burgundy)]-50 rounded-2xl p-6 mb-6 border border-[var(--color-burgundy)]-200">
        <h3 class="text-xl font-serif font-bold text-[var(--color-burgundy)-900] mb-4">Transferencia Bancaria</h3>
        <dl class="grid grid-cols-2 gap-4 text-sm">
          <div>
            <dt class="text-[var(--color-burgundy)-700 font-medium">Banco</dt>
            <dd class="mt-1">{{ DONATION_CONFIG.bank.bankName }}</dt>
          </div>
          <div>
            <dt class="text-[var(--color-burgundy)-700 font-medium">Tipo de Cuenta</dt>
            <dd class="mt-1">{{ DONATION_CONFIG.bank.accountType }}</dd>
          </div>
          <div>
            <dt class="text-[var(--color-burgundy)-700 font-medium">Número de Cuenta</dt>
            <dd class="mt-1 font-mono break-all">{{ DONATION_CONFIG.bank.accountNumber }}</dd>
          </div>
          <div>
            <dt class="text-[var(--color-burgundy)-700 font-medium">RUC</dt>
            <dd class="mt-1">{{ DONATION_CONFIG.bank.ruc }}</dd>
          </div>
          <div>
            <dt class="text-[var(--color-burgundy)-700 font-medium">Email</dt>
            <dd class="mt-1">{{ DONATION_CONFIG.bank.email }}</dd>
          </div>
        </dl>
      </div>

      <!-- Yappy Directory -->
      <div class="bg-[var(--color-amber)]-50 rounded-2xl p-6 mb-6 border border-[var(--color-amber)]-200">
        <h3 class="text-xl font-serif font-bold text-[var(--color-amber)-900] mb-4">Directorio Yappy</h3>
        <p class="text-[text-secondary] mb-4">Escanea o busca en el directorio:</p>
        <div class="flex items-center gap-3">
          <span class="text-3xl font-bold text-[var(--color-amber)]-500">@fundacionfiba</span>
        </div>
        <p class="text-[text-muted] text-sm">Selecciona @fundacionfiba del directorio comercial</p>

        <button
          @click="handleCopyYappy"
          class="w-full py-2 px-4 bg-[var(--color-amber)]-500 text-[var(--color-burgundy)]-900 font-medium rounded-xl hover:bg-[var(--color-amber)]-600 transition-colors"
        >
          Copiar directorio Yappy
        </button>
      </div>

      <!-- Contact Form -->
      <div class="space-y-4">
        <label>
          <span class="text-[var(--color-burgundy)]-700 font-medium block mb-1">Nombre completo</span>
          <input
            v-model="form.name"
            type="text"
            class="w-full px-4 py-2 rounded-xl border border-[var(--surface-200)] bg-[var(--color-warm-ivory)] text-[var(--color-burgundy)]-900 focus-outline"
            required
          />
        </label>

        <label>
          <span class="text-[var(--color-burgundy)]-700 font-medium block mb-1">Correo electrónico</span>
          <input
            v-model="form.email"
            type="email"
            class="w-full px-4 py-2 rounded-xl border border-[var(--surface-200)] bg-[var(--color-warm-ivory)] text-[var(--color-burgundy)]-900 focus-outline"
            required
          />
        </label>

        <label>
          <span class="text-[var(--color-burgundy)]-700 font-medium block mb-1">Asunto</span>
          <input
            v-model="form.subject"
            type="text"
            class="w-full px-4 py-2 rounded-xl border border-[var(--surface-200)] bg-[var(--color-warm-ivory)] text-[var(--color-burgundy)]-900 focus-outline"
            required
          />
        </label>

        <label>
          <span class="text-[var(--color-burgundy)]-700 font-medium block mb-1">Mensaje</span>
          <textarea
            v-model="form.message"
            rows="4"
            class="w-full px-4 py-2 rounded-xl border border-[var(--surface-200)] bg-[var(--color-warm-ivory)] text-[var(--color-burgundy)]-900 focus-outline resize-y"
            required
            minlength="10"
          ></textarea>
          <p class="text-xs text-[var(--color-burgundy)]-500 mt-2">Mínimo 10 caracteres</p>
        </label>

        <button
          type="submit"
          @click="submitContact"
          class="w-full py-3 bg-[var(--color-burgundy)]-900 text-[var(--color-warm-ivory)]-900 font-medium rounded-xl hover:bg-[var(--color-burgundy)]-800 transition-colors"
          :disabled="isSubmitting">
          <span v-if="isSubmitting">Enviando...</span>
          <span v-else>Enviar mensaje</span>
        </button>

        <p v-if="errorMessage" class="text-sm text-[var(--color-burgundy)]-500 mt-2">{{ errorMessage }}</p>
        <p v-if="isSuccess" class="text-sm text-[var(--color-amber)]-500 mt-2">¡Gracias! Tu mensaje ha sido enviado exitosamente.</p>
      </div>
    </div>
  </section>
</template>

