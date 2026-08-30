<script setup lang="ts">
import { IMPACT_METRICS } from '~/constants/content'
const metrics = IMPACT_METRICS
</script>

<template>
  <section id="impacto" class="py-24 bg-[var(--color-warm-ivory)] relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-bold burgundy bg-[var(--color-burgundy)]/50 border border-[var(--color-burgundy)]/80 mb-4 shadow-xs">
          <span class="text-xs font-semibold uppercase tracking-widest text-[var(--color-burgundy)-800]">Impacto</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-burgundy)-900] mb-6 tracking-tight">
          Cifras que Transforman
        </h2>
        <p class="text-base sm:text-lg text-[text-secondary] leading-relaxed font-light">
          Cada cifra representa a un niño con un pincel en la mano, una comunidad que recupera sus espacios o una familia que descubre el valor del arte.
        </p>
      </div>

      <!-- Metrics Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="metric in metrics"
          :key="metric.id"
          class="bg-white rounded-2xl p-6 flex flex-col justify-between hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-[var(--surface-200)]"
        >
          <div>
            <div class="w-12 h-12 rounded-xl bg-[var(--color-burgundy)]/20 text-[var(--color-burgundy)]-300 flex items-center justify-center mb-4">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>

            <div class="text-4xl sm:text-5xl font-serif font-extrabold text-[var(--color-burgundy)-900] tracking-tight mb-2">
              {{ metric.value }}
            </div>

            <div class="text-lg font-semibold text-[text-secondary] mb-3">
              {{ metric.label }}
            </div>

            <p class="text-sm text-[text-secondary] leading-relaxed">
              {{ metric.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>