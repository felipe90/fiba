<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'elevated' | 'bordered' | 'glass' | 'crimson'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hover?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md',
  hover: false
})

const paddingClasses = computed(() => {
  switch (props.padding) {
    case 'none':
      return 'p-0'
    case 'sm':
      return 'p-4 sm:p-5'
    case 'lg':
      return 'p-8 sm:p-10'
    case 'md':
    default:
      return 'p-6 sm:p-8'
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'elevated':
      return 'bg-white shadow-fiba-elevated border border-fiba-surface-200'
    case 'bordered':
      return 'bg-white/80 border border-fiba-surface-300'
    case 'glass':
      return 'bg-glass border border-white/40 shadow-fiba-card'
    case 'crimson':
      return 'bg-gradient-to-br from-fiba-primary-900 to-fiba-primary-800 text-fiba-surface-50 border border-fiba-primary-700/50 shadow-fiba-card'
    case 'default':
    default:
      return 'bg-white shadow-fiba-card border border-fiba-surface-100'
  }
})

const hoverClasses = computed(() => {
  return props.hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-fiba-elevated' : ''
})
</script>

<template>
  <div :class="['rounded-fiba-xl overflow-hidden', variantClasses, paddingClasses, hoverClasses]">
    <slot />
  </div>
</template>
