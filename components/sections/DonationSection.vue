<script setup lang="ts">
import { useDonationInfo } from '~/composables/useDonationInfo'
import AppCard from '~/components/ui/AppCard.vue'
import AppBadge from '~/components/ui/AppBadge.vue'
import AppButton from '~/components/ui/AppButton.vue'

const { donationInfo, copiedKey, copyToClipboard, getWhatsAppDonationUrl } = useDonationInfo()
</script>

<template>
  <section id="donaciones" class="py-24 bg-white relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
        <AppBadge variant="accent" size="md" class="mb-4">
          Canales de Apoyo
        </AppBadge>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-fiba-primary-900 mb-6">
          Dona y Multiplica el Arte en Panamá
        </h2>
        <p class="text-base sm:text-lg text-fiba-text-secondary leading-relaxed font-light">
          Tu donación directa financia materiales pedagógicos, pinceles, lienzos, instrumentos musicales y refrigerios para nuestros talleres comunitarios.
        </p>
      </div>

      <!-- Main Donation Options Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <!-- Option 1: Banco General ACH Direct Card -->
        <AppCard variant="bordered" padding="lg" class="flex flex-col justify-between border-2 border-fiba-primary-200 hover:border-fiba-primary-600 transition-colors">
          <div>
            <div class="flex items-center justify-between mb-6">
              <div class="w-12 h-12 rounded-xl bg-fiba-primary-50 text-fiba-primary-700 flex items-center justify-center font-bold">
                ACH
              </div>
              <AppBadge variant="primary">Transferencia Local</AppBadge>
            </div>

            <h3 class="text-2xl font-serif font-bold text-fiba-primary-900 mb-4">
              {{ donationInfo.bank.bankName }}
            </h3>

            <div class="space-y-4 text-sm text-fiba-text-secondary">
              <div>
                <span class="block text-xs font-semibold text-fiba-text-muted uppercase">Titular</span>
                <span class="font-medium text-fiba-text-primary">{{ donationInfo.bank.accountHolder }}</span>
              </div>

              <div>
                <span class="block text-xs font-semibold text-fiba-text-muted uppercase">Tipo de Cuenta</span>
                <span class="font-medium text-fiba-text-primary">{{ donationInfo.bank.accountType }}</span>
              </div>

              <div class="p-3 bg-fiba-surface-100 rounded-lg flex items-center justify-between">
                <div>
                  <span class="block text-xs font-semibold text-fiba-text-muted uppercase">No. de Cuenta</span>
                  <span class="font-mono font-bold text-fiba-primary-900">{{ donationInfo.bank.accountNumber }}</span>
                </div>
                <button
                  type="button"
                  class="p-2 text-fiba-primary-700 hover:text-fiba-primary-900 rounded-md hover:bg-fiba-surface-200 transition-colors"
                  :title="copiedKey === 'account' ? '¡Copiado!' : 'Copiar número de cuenta'"
                  @click="copyToClipboard(donationInfo.bank.accountNumber, 'account')"
                >
                  <span v-if="copiedKey === 'account'" class="text-xs font-bold text-emerald-600">✓ Copiado</span>
                  <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>

              <div class="p-3 bg-fiba-surface-100 rounded-lg flex items-center justify-between">
                <div>
                  <span class="block text-xs font-semibold text-fiba-text-muted uppercase">RUC Legal</span>
                  <span class="font-mono text-xs font-bold text-fiba-primary-900">{{ donationInfo.bank.ruc }}</span>
                </div>
                <button
                  type="button"
                  class="p-2 text-fiba-primary-700 hover:text-fiba-primary-900 rounded-md hover:bg-fiba-surface-200 transition-colors"
                  :title="copiedKey === 'ruc' ? '¡Copiado!' : 'Copiar RUC'"
                  @click="copyToClipboard(donationInfo.bank.ruc, 'ruc')"
                >
                  <span v-if="copiedKey === 'ruc'" class="text-xs font-bold text-emerald-600">✓ Copiado</span>
                  <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-fiba-surface-200 text-xs text-fiba-text-muted">
            Envía tu comprobante a <a :href="`mailto:${donationInfo.bank.email}`" class="text-fiba-primary-700 font-semibold underline">{{ donationInfo.bank.email }}</a>
          </div>
        </AppCard>

        <!-- Option 2: Yappy Guide Card -->
        <AppCard variant="bordered" padding="lg" class="flex flex-col justify-between border-2 border-fiba-accent-300 hover:border-fiba-accent-500 transition-colors">
          <div>
            <div class="flex items-center justify-between mb-6">
              <div class="w-12 h-12 rounded-xl bg-fiba-accent-300/40 text-fiba-accent-600 flex items-center justify-center font-bold text-xl">
                Y!
              </div>
              <AppBadge variant="accent">Inmediato &amp; Móvil</AppBadge>
            </div>

            <h3 class="text-2xl font-serif font-bold text-fiba-primary-900 mb-2">
              Yappy Comercial
            </h3>

            <div class="p-4 bg-fiba-accent-300/20 border border-fiba-accent-400/30 rounded-xl mb-4 text-center">
              <span class="block text-xs font-semibold text-fiba-accent-600 uppercase mb-1">Directorio Yappy</span>
              <span class="text-2xl font-mono font-extrabold text-fiba-primary-900">{{ donationInfo.yappy.directoryName }}</span>
            </div>

            <h4 class="text-xs font-semibold uppercase text-fiba-text-muted mb-2 tracking-wide">
              Pasos para donar:
            </h4>
            <ol class="space-y-2 text-xs text-fiba-text-secondary list-decimal pl-4 leading-relaxed">
              <li v-for="(step, idx) in donationInfo.yappy.instructions" :key="idx">
                {{ step }}
              </li>
            </ol>
          </div>

          <div class="mt-6 pt-4 border-t border-fiba-surface-200">
            <AppButton
              variant="gold"
              size="sm"
              class="w-full justify-center"
              @click="copyToClipboard(donationInfo.yappy.directoryName, 'yappy')"
            >
              <span v-if="copiedKey === 'yappy'">✓ Directorio Copiado</span>
              <span v-else>Copiar Directorio {{ donationInfo.yappy.directoryName }}</span>
            </AppButton>
          </div>
        </AppCard>

        <!-- Option 3: Corporate Alliance & WhatsApp -->
        <AppCard variant="bordered" padding="lg" class="flex flex-col justify-between border-2 border-fiba-secondary-400/40 hover:border-fiba-secondary-600 transition-colors">
          <div>
            <div class="flex items-center justify-between mb-6">
              <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <AppBadge variant="teal">Alianzas &amp; RSE</AppBadge>
            </div>

            <h3 class="text-2xl font-serif font-bold text-fiba-primary-900 mb-3">
              Alianzas Corporativas
            </h3>

            <p class="text-sm text-fiba-text-secondary leading-relaxed mb-6">
              ¿Tu empresa u organización desea patrocinar un programa de formación, una exposición o adoptar un taller barrial con impacto medible en RSE?
            </p>

            <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-200/80 mb-4 text-xs text-emerald-900 leading-relaxed">
              Coordinamos donaciones en especie (materiales de arte, instrumentos, caballetes) y convenios de patrocinio deducibles de impuestos.
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-fiba-surface-200">
            <AppButton
              :href="getWhatsAppDonationUrl()"
              target="_blank"
              variant="secondary"
              size="sm"
              class="w-full justify-center"
            >
              Chatear por WhatsApp
            </AppButton>
          </div>
        </AppCard>
      </div>

      <!-- Transparency Commitment Banner -->
      <div class="p-8 rounded-2xl bg-fiba-surface-100 border border-fiba-surface-200 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-5">
          <div class="w-14 h-14 rounded-2xl bg-fiba-primary-700 text-white flex items-center justify-center shrink-0">
            <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h4 class="text-lg font-serif font-bold text-fiba-primary-900">
              Compromiso de Rendición de Cuentas
            </h4>
            <p class="text-xs sm:text-sm text-fiba-text-secondary mt-1">
              Todos los fondos recibidos son auditados periódicamente y destinados directamente a la ejecución técnica y logística de los programas de FIBA.
            </p>
          </div>
        </div>

        <AppButton
          href="#contacto"
          variant="outline"
          size="sm"
          class="shrink-0 whitespace-nowrap"
        >
          Solicitar Informe de Gestión
        </AppButton>
      </div>
    </div>
  </section>
</template>
