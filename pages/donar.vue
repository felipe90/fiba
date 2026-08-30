<script setup lang="ts">
import DonationSection from '~/components/sections/DonationSection.vue'

useHead({
  title: 'Donaciones y Alianzas',
  meta: [
    {
      name: 'description',
      content: 'Canales oficiales de donación para la Fundación Bellas Artes Integra: Banco General ACH, Yappy Comercial y Alianzas Corporativas.'
    }
  ]
})
</script>

<template>
  <div class="pt-24 min-h-screen bg-white">
    <DonationSection />
  </div>
</template>
