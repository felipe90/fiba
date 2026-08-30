<script setup lang="ts">
import { watch } from 'vue'
import AppButton from '~/components/ui/AppButton.vue'

interface NavLink {
  label: string
  href: string
}

interface Props {
  modelValue: boolean
  links: NavLink[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'close'): void
}>()

const close = () => {
  emit('update:modelValue', false)
  emit('close')
}

watch(() => props.modelValue, (isOpen) => {
  if (typeof document !== 'undefined') {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 bg-fiba-secondary-900/60 backdrop-blur-sm md:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación móvil"
        @click.self="close"
      >
        <Transition
          enter-active-class="transition-transform duration-300 ease-out"
          enter-from-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition-transform duration-200 ease-in"
          leave-from-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <div
            v-if="modelValue"
            class="fixed inset-y-0 right-0 w-full max-w-xs bg-fiba-surface-50 shadow-2xl p-6 flex flex-col justify-between border-l border-fiba-surface-200"
          >
            <!-- Top brand & close -->
            <div>
              <div class="flex items-center justify-between pb-6 border-b border-fiba-surface-200">
                <img src="/images/logo-fiba.svg" alt="FIBA" class="h-9 w-auto">
                <button
                  type="button"
                  class="p-2 text-fiba-text-muted hover:text-fiba-primary-900 rounded-full hover:bg-fiba-surface-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-fiba-primary-600"
                  aria-label="Cerrar menú"
                  @click="close"
                >
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <!-- Navigation links -->
              <nav class="mt-8 flex flex-col gap-4">
                <a
                  v-for="link in links"
                  :key="link.href"
                  :href="link.href"
                  class="text-lg font-medium text-fiba-text-primary hover:text-fiba-primary-700 py-2 transition-colors border-b border-fiba-surface-100"
                  @click="close"
                >
                  {{ link.label }}
                </a>
              </nav>
            </div>

            <!-- Bottom CTA -->
            <div class="pt-6 border-t border-fiba-surface-200 flex flex-col gap-3">
              <AppButton
                href="#donaciones"
                variant="gold"
                size="md"
                class="w-full justify-center"
                @click="close"
              >
                Donar Ahora
              </AppButton>
              <AppButton
                href="#contacto"
                variant="outline"
                size="md"
                class="w-full justify-center"
                @click="close"
              >
                Contáctanos
              </AppButton>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
