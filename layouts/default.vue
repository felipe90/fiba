<script setup lang="ts">
import TheHeader from '~/components/layout/TheHeader.vue'
import TheFooter from '~/components/layout/TheFooter.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-fiba-surface-50 text-fiba-text-primary selection:bg-fiba-accent-400/30 selection:text-fiba-primary-900">
    <TheHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
