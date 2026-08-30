<script setup lang="ts">
import { useProjects } from '~/composables/useProjects'
import ProjectCard from '~/components/ui/ProjectCard.vue'

const { filteredProjects } = useProjects()
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <ProjectCard
      v-for="project in filteredProjects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>
</script>