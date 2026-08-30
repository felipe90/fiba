<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import AppButton from '~/components/ui/AppButton.vue'
import TheMobileDrawer from '~/components/layout/TheMobileDrawer.vue'

const isScrolled = ref(false)
const isDrawerOpen = ref(false)

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Donaciones', href: '#donaciones' },
  { label: 'Contacto', href: '#contacto' }
]

const handleScroll = () => {
  if (typeof window !== 'undefined') {
    isScrolled.value = window.scrollY > 20
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-fiba-surface-50/95 backdrop-blur-md shadow-sm border-b border-fiba-surface-200 py-3.5'
        : 'bg-fiba-surface-50/80 backdrop-blur-sm py-4 border-b border-fiba-surface-200/40'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <!-- Brand Logo -->
      <a href="#inicio" class="flex items-center gap-3 group focus-visible:outline-none" aria-label="FIBA - Inicio">
        <img
          src="/images/logo-fiba.svg"
          alt="FIBA Logo"
          class="h-10 sm:h-11 w-auto transition-transform group-hover:scale-105"
        >
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-7">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-fiba-text-secondary hover:text-fiba-primary-700 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-fiba-primary-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Desktop CTA Actions -->
      <div class="hidden md:flex items-center gap-3">
        <AppButton
          href="#donaciones"
          variant="gold"
          size="sm"
        >
          <template #leading>
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </template>
          Donar Ahora
        </AppButton>
      </div>

      <!-- Mobile Menu Trigger Button -->
      <div class="flex items-center md:hidden">
        <button
          type="button"
          class="p-2.5 rounded-lg text-fiba-primary-900 hover:bg-fiba-surface-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-fiba-primary-600"
          :aria-expanded="isDrawerOpen"
          aria-label="Abrir menú de navegación"
          @click="isDrawerOpen = true"
        >
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Slide Drawer -->
    <TheMobileDrawer
      v-model="isDrawerOpen"
      :links="navLinks"
      @close="isDrawerOpen = false"
    />
  </header>
</template>
