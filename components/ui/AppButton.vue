<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
  href?: string
  to?: string
  ariaLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  loading: false,
  href: undefined,
  to: undefined,
  ariaLabel: undefined
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none'

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-xs px-3.5 py-1.5 gap-1.5'
    case 'lg':
      return 'text-base px-7 py-3.5 gap-2.5 font-semibold'
    case 'md':
    default:
      return 'text-sm px-5 py-2.5 gap-2'
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-fiba-secondary-900 text-fiba-surface-50 hover:bg-fiba-secondary-800 active:scale-[0.98] shadow-sm'
    case 'gold':
      return 'bg-gradient-to-r from-fiba-accent-400 to-fiba-accent-500 text-fiba-secondary-900 hover:brightness-105 active:scale-[0.98] font-semibold shadow-fiba-gold'
    case 'outline':
      return 'border border-fiba-primary-600 text-fiba-primary-700 bg-transparent hover:bg-fiba-primary-50 active:bg-fiba-primary-100'
    case 'ghost':
      return 'bg-transparent text-fiba-text-secondary hover:text-fiba-primary-700 hover:bg-fiba-surface-100'
    case 'primary':
    default:
      return 'bg-fiba-primary-700 text-white hover:bg-fiba-primary-800 active:scale-[0.98] shadow-sm'
  }
})

const handleClick = (e: MouseEvent) => {
  if (props.disabled || props.loading) {
    e.preventDefault()
    return
  }
  emit('click', e)
}
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="[baseClasses, sizeClasses, variantClasses]"
    :aria-label="ariaLabel"
    @click="handleClick"
  >
    <svg
      v-if="loading"
      class="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
    <slot name="leading" />
    <slot />
    <slot name="trailing" />
  </NuxtLink>

  <a
    v-else-if="href"
    :href="href"
    :class="[baseClasses, sizeClasses, variantClasses]"
    :aria-label="ariaLabel"
    @click="handleClick"
  >
    <svg
      v-if="loading"
      class="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
    <slot name="leading" />
    <slot />
    <slot name="trailing" />
  </a>

  <button
    v-else
    :type="type"
    :disabled="disabled || loading"
    :class="[baseClasses, sizeClasses, variantClasses]"
    :aria-label="ariaLabel"
    @click="handleClick"
  >
    <svg
      v-if="loading"
      class="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
    <slot name="leading" />
    <slot />
    <slot name="trailing" />
  </button>
</template>
