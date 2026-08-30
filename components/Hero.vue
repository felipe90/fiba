<script setup lang="ts">
import AppButton from '~/components/ui/AppButton.vue'
import AppBadge from '~/components/ui/AppBadge.vue'
</script>

<template>
  <section id="inicio" class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
    <!-- Background atmospheric gradients using design tokens -->
    <div class="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none" :style="{ background: 'rgba(var(--color-burgundy), .1)' }" />
    <div class="absolute top-1/3 -left-32 w-[450px] h-[450px] rounded-full blur-3xl pointer-events-none" :style="{ background: 'rgba(var(--color-amber), .1)' }" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        <!-- Text Column -->
        <div class="lg:col-span-7 flex flex-col items-start">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 shadow-xs" :style="{ background: 'rgba(var(--color-burgundy), .05)', borderColor: 'rgba(var(--color-burgundy), .2)' }">
            <span class="w-2 h-2 rounded-full" :style="{ background: 'var(--color-amber)' }" />
            <span class="text-xs font-semibold uppercase tracking-widest" :style="{ color: 'var(--color-burgundy)' }">Fundación Bellas Artes Integra</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif font-bold" :style="{ color: 'var(--color-burgundy)' }">
            El <span class="italic font-cormorant" :style="{ color: 'var(--color-amber)' }">ADN del Arte</span> transformando comunidades
          </h1>

          <p class="mt-6 text-lg sm:text-xl leading-relaxed max-w-2xl font-light">
            Democratizamos la educación artística, rescatamos el patrimonio cultural y construimos tejido social inclusivo para la niñez y juventud en Panamá.
          </p>

          <!-- Quote Highlight -->
          <div class="mt-6 pl-4 border-l-2 italic text-sm sm:text-base font-cormorant">
            "El arte no es un privilegio de pocos, sino el derecho fundamental que despierta el pensamiento crítico y la sensibilidad humana."
          </div>

          <!-- CTAs -->
          <div class="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <AppButton
              href="#donaciones"
              variant="gold"
              size="lg"
              class="w-full sm:w-auto"
            >
              <template #leading>
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </template>
              Sumar mi Aporte
            </AppButton>

            <AppButton
              href="#proyectos"
              variant="outline"
              size="lg"
              class="w-full sm:w-auto"
            >
              Explorar Proyectos
              <template #trailing>
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </template>
            </AppButton>
          </div>

          <!-- Trust Badges / Metrics preview -->
          <div class="mt-10 pt-6 border-t grid grid-cols-3 gap-6 w-full max-w-lg">
            <div>
              <div class="text-2xl sm:text-3xl font-serif font-bold">+1,500</div>
              <div class="text-xs mt-0.5 font-medium">Beneficiarios directos</div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl font-serif font-bold">+120</div>
              <div class="text-xs mt-0.5 font-medium">Talleres artísticos</div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl font-serif font-bold">100%</div>
              <div class="text-xs mt-0.5 font-medium">Compromiso transparente</div>
            </div>
          </div>
        </div>

        <!-- Visual Hero Showcase Card -->
        <div class="lg:col-span-5 relative">
          <div class="relative mx-auto max-w-md lg:max-w-none">
            <!-- Decorative Museum Framing Shadow & Border -->
            <div class="absolute -inset-2 bg-gradient-to-tr via-fiba-accent-400/20 to-fiba-secondary-500/20 rounded-2xl blur-lg opacity-70" />
            
            <div class="relative bg-white p-5 sm:p-7 rounded-2xl shadow-elevated border border-stone-200/90">
              <!-- Framed Artwork Canvas -->
              <div class="overflow-hidden rounded-xl aspect-[4/3] mb-5 relative border border-stone-100 shadow-inner group">
                <img
                  src="/images/hero-artwork.svg"
                  alt="El ADN del Arte - Obra Institucional FIBA"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                <div class="absolute bottom-3 left-3">
                  <AppBadge variant="accent" class="shadow-sm">Colección Institucional</AppBadge>
                </div>
              </div>

              <!-- Museum Exhibition Plaque / Description -->
              <div class="flex items-center justify-between gap-2 mb-2">
                <span class="text-xs font-bold uppercase tracking-widest text-fiba-accent-600">Iniciativa Central</span>
                <span class="text-xs text-fiba-text-muted font-medium">Panamá · 2024–2025</span>
              </div>
              <h3 class="text-xl font-serif font-bold text-fiba-primary-900 mb-2">
                Semillero de Artes Comunitarias
              </h3>
              <p class="text-sm text-fiba-text-secondary leading-relaxed">
                Brindando formación y herramientas artísticas a cientos de niños panameños que descubren su potencial creativo cada semana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>