<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'accent' | 'teal' | 'neutral' | 'success'
  size?: 'sm' | 'md'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md'
})

const sizeClasses = computed(() => {
  return props.size === 'sm' ? 'text-xs px-2.5 py-0.5' : 'text-xs px-3 py-1 font-medium'
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'accent':
      return 'bg-fiba-accent-300/40 text-fiba-accent-600 border border-fiba-accent-400/30'
    case 'teal':
      return 'bg-fiba-secondary-400/20 text-fiba-secondary-600 border border-fiba-secondary-400/40'
    case 'neutral':
      return 'bg-fiba-surface-200 text-fiba-text-secondary border border-fiba-surface-300'
    case 'success':
      return 'bg-emerald-50 text-emerald-700 border border-emerald-200'
    case 'primary':
    default:
      return 'bg-fiba-primary-50 text-fiba-primary-700 border border-fiba-primary-200'
  }
})
</script>

<template>
  <span :class="['inline-flex items-center rounded-full tracking-wide', sizeClasses, variantClasses]">
    <slot />
  </span>
</template>
