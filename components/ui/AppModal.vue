<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

interface Props {
  modelValue: boolean
  title?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  title: undefined,
  maxWidth: 'lg'
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'close'): void
}>()

const modalContentRef = ref<HTMLElement | null>(null)

const close = () => {
  emit('update:modelValue', false)
  emit('close')
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.modelValue) {
    close()
  }
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

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})

const maxWidthClasses = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  '2xl': 'max-w-5xl'
}
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
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-fiba-secondary-900/60 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        @click.self="close"
      >
        <div
          ref="modalContentRef"
          :class="[
            'relative w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-fiba-surface-200 transform transition-all',
            maxWidthClasses[maxWidth]
          ]"
        >
          <!-- Header -->
          <div v-if="title || $slots.header" class="flex items-center justify-between px-6 py-4 border-b border-fiba-surface-200 bg-fiba-surface-50">
            <slot name="header">
              <h3 class="text-xl font-serif font-bold text-fiba-primary-900">
                {{ title }}
              </h3>
            </slot>
            <button
              type="button"
              class="p-2 -mr-2 text-fiba-text-muted hover:text-fiba-primary-900 rounded-full hover:bg-fiba-surface-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-fiba-primary-600"
              aria-label="Cerrar modal"
              @click="close"
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Body -->
          <div class="px-6 py-5 max-h-[75vh] overflow-y-auto">
            <slot />
          </div>

          <!-- Footer -->
          <div v-if="$slots.footer" class="px-6 py-4 border-t border-fiba-surface-200 bg-fiba-surface-50 flex justify-end gap-3">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
