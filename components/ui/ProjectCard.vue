<script setup lang="ts">
import type { Project } from '~/types/content'
defineProps<{ project: Project }>()
</script>

<template>
  <article
    class="group bg-[var(--color-warm-ivory)] rounded-2xl overflow-hidden border border-[var(--surface-200)] transition-all duration-300 hover:shadow-card hover:border-[var(--color-amber)]-400"
  >
    <!-- Cover Image -->
    <img
      :src="project.coverImage"
      :alt="project.title"
      class="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
    />

    <div class="p-4">
      <!-- Category Badge -->
      <span class="inline-block mb-2 px-2 py-0.5 text-xs font-semibold uppercase tracking-widest bg-[var(--color-burgundy)]/10 text-[var(--color-burgundy)]-200 rounded-full">
        {{ project.categoryLabel }}
      </span>

      <!-- Title -->
      <h3 class="text-lg font-serif font-bold text-[var(--color-burgundy)-900] mb-2 line-clamp-2">
        {{ project.title }}
      </h3>

      <!-- Status Badge -->
      <span
        class="inline-block text-xs font-medium rounded-full px-2 py-0.5"
        :class="[
          'bg-[var(--color-burgundy)]-100',
          'text-[var(--color-burgundy)]-700',
          project.status === 'en-curso' ? 'mb-1' : '',
          project.status === 'completado' ? 'mb-1' : ''
        ]"
      >
        <span v-if="project.status === 'en-curso'">En curso</span>
        <span v-if="project.status === 'completado'">Completado</span>
        <span v-if="project.status === 'proximo'">Por venir</span>
      </span>
    </div>
  </article>
</template>