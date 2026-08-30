<script setup lang="ts">
import { useImpactMetrics } from '~/composables/useImpactMetrics'
import AppBadge from '~/components/ui/AppBadge.vue'

const { metrics, formatMetricDisplay } = useImpactMetrics()
</script>

<template>
  <section id="impacto" class="py-24 bg-gradient-to-br from-fiba-primary-950 via-fiba-primary-900 to-fiba-secondary-900 text-fiba-surface-50 relative overflow-hidden">
    <!-- Atmospheric subtle circles -->
    <div class="absolute -top-32 -left-32 w-96 h-96 bg-fiba-primary-600/20 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-fiba-accent-500/10 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
        <AppBadge variant="accent" size="md" class="mb-4">
          Resultados Tangibles
        </AppBadge>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
          Impacto que Transforma Realidades
        </h2>
        <p class="text-base sm:text-lg text-fiba-surface-200 leading-relaxed font-light">
          Cada cifra representa a un niño con un pincel en la mano, una comunidad que recupera sus espacios o una familia que descubre el valor del arte.
        </p>
      </div>

      <!-- Metrics Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="metric in metrics"
          :key="metric.id"
          class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-fiba-accent-400/40"
        >
          <div>
            <div class="w-12 h-12 rounded-xl bg-fiba-accent-400/20 text-fiba-accent-300 flex items-center justify-center mb-6">
              <svg v-if="metric.id === 'ninos'" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <svg v-else-if="metric.id === 'talleres'" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <svg v-else-if="metric.id === 'proyectos'" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>

            <div class="text-4xl sm:text-5xl font-serif font-extrabold text-white tracking-tight mb-2 text-gradient-gold">
              {{ formatMetricDisplay(metric) }}
            </div>

            <div class="text-lg font-semibold text-fiba-surface-50 mb-3">
              {{ metric.label }}
            </div>

            <p class="text-sm text-fiba-surface-300 leading-relaxed">
              {{ metric.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
