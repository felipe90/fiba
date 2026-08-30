<script setup lang="ts">
import { ORGANIZATION_INFO } from '~/constants/content'
import AppCard from '~/components/ui/AppCard.vue'

const pillars = ORGANIZATION_INFO.pillars
</script>

<template>
  <section id="nosotros" class="py-24 bg-[var(--color-warm-ivory)] relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-bold burgundy bg-[var(--color-burgundy)]/50 border border-[var(--color-burgundy)]/80 mb-4 shadow-xs">
          <span class="text-xs font-semibold uppercase tracking-widest text-[var(--color-burgundy)-800]">Nuestra Identidad & Propósito</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-burgundy)-900] mb-6 tracking-tight">
          Creemos en el poder transformador de la cultura
        </h2>
        <p class="text-base sm:text-lg text-[text-secondary] leading-relaxed font-light">
          FIBA nace con la convicción de que el arte no es un privilegio, sino un derecho humano fundamental que despierta el pensamiento crítico, la empatía y la cohesión comunitaria.
        </p>
      </div>

      <!-- Editorial Quote Banner (Inspiration from artfoundation-x-pwd.com) -->
      <div class="mb-16 p-8 sm:p-12 rounded-2xl bg-[surface-50] border border-[surface-200] relative overflow-hidden text-center shadow-subtle">
        <div class="absolute -top-6 -left-4 text-7xl font-serif text-[var(--color-burgundy)]-200 select-none opacity-40">“</div>
        <blockquote class="text-xl sm:text-2xl lg:text-3xl font-serif italic text-[var(--color-burgundy)]-900 leading-snug max-w-4xl mx-auto font-cormorant">
          "El ADN del Arte no es una metáfora abstracta: es la huella imborrable que dejamos en el alma de cada niño y joven cuando le entregamos las herramientas para crear su propio destino."
        </blockquote>
        <div class="mt-4 flex items-center justify-center gap-3">
          <div class="h-px w-12 bg-[var(--color-amber)]-500" />
          <span class="text-xs font-semibold tracking-widest uppercase text-[var(--color-amber)]-600">Fundación Bellas Artes Integra</span>
          <div class="h-px w-12 bg-[var(--color-amber)]-500" />
        </div>
      </div>

      <!-- Mission & Vision Dual Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <AppCard variant="bordered" padding="lg" class="relative overflow-hidden group hover:border-[var(--color-burgundy)]-500 transition-all duration-300 hover:shadow-card">
          <div class="w-12 h-12 rounded-xl bg-[var(--color-burgundy)]-50 text-[var(--color-burgundy)]-700 flex items-center justify-center mb-6 border border-[var(--color-burgundy)]-200">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-2xl font-serif font-bold text-[var(--color-burgundy)-900] mb-3">
            Nuestra Misión
          </h3>
          <p class="text-[text-secondary] leading-relaxed">
            {{ ORGANIZATION_INFO.mission }}
          </p>
        </AppCard>

        <AppCard variant="bordered" padding="lg" class="relative overflow-hidden group hover:border-[var(--color-amber)]-500 transition-all duration-300 hover:shadow-card">
          <div class="w-12 h-12 rounded-xl bg-[var(--color-amber)]-300/30 text-[var(--color-amber)]-600 flex items-center justify-center mb-6 border border-[var(--color-amber)]-300">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h3 class="text-2xl font-serif font-bold text-[var(--color-burgundy)-900] mb-3">
            Nuestra Visión
          </h3>
          <p class="text-[text-secondary] leading-relaxed">
            {{ ORGANIZATION_INFO.vision }}
          </p>
        </AppCard>
      </div>

      <!-- 3 Strategic Pillars Section -->
      <div class="pt-6">
        <h3 class="text-2xl sm:text-3xl font-serif font-bold text-center text-[var(--color-burgundy)-900] mb-12">
          Pilares Estratégicos Institucionales
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(pillar, idx) in pillars"
            :key="pillar.id"
            class="bg-[surface-50] rounded-2xl p-8 border border-[surface-200] flex flex-col justify-between transition-all duration-300 hover:shadow-card hover:-translate-y-1 hover:border-[var(--color-amber)]-400 group"
          >
            <div>
              <div class="flex items-center justify-between mb-6">
                <span class="text-3xl font-serif italic text-[var(--color-amber)]-500 font-bold font-cormorant">0{{ idx + 1 }}</span>
                <span class="w-11 h-11 rounded-full bg-white shadow-sm flex items-center justify-center text-[var(--color-burgundy)]-700 border border-[surface-200] group-hover:border-[var(--color-amber)]-400 transition-colors">
                  <svg v-if="pillar.id === 'educacion'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  <svg v-else-if="pillar.id === 'inclusion'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </span>
              </div>
              <h4 class="text-xl font-serif font-bold text-[var(--color-burgundy)-900] mb-3">
                {{ pillar.title }}
              </h4>
              <p class="text-[text-secondary] leading-relaxed">
                {{ pillar.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>