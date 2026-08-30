<script setup lang="ts">
import ProjectsSection from '~/components/sections/ProjectsSection.vue'

useHead({
  title: 'Iniciativas y Proyectos Culturales',
  meta: [
    {
      name: 'description',
      content: 'Explora todos los proyectos, talleres y clínicas artísticas de la Fundación Bellas Artes Integra.'
    }
  ]
})
</script>

<template>
  <div class="pt-24 min-h-screen bg-fiba-surface-100">
    <ProjectsSection />
  </div>
</template>
