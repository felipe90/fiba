<script setup lang="ts">
import { ref } from 'vue'
import { useProjects } from '~/composables/useProjects'
import type { Project } from '~/types/content'
import AppBadge from '~/components/ui/AppBadge.vue'
import AppButton from '~/components/ui/AppButton.vue'
import AppModal from '~/components/ui/AppModal.vue'

const { categories, selectedCategory, filteredProjects, setCategory } = useProjects()

const isModalOpen = ref(false)
const activeProject = ref<Project | null>(null)

const openProjectModal = (project: Project) => {
  activeProject.value = project
  isModalOpen.value = true
}

const closeProjectModal = () => {
  isModalOpen.value = false
  activeProject.value = null
}
</script>

<template>
  <section id="proyectos" class="py-24 bg-fiba-surface-100 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center mb-12">
        <AppBadge variant="primary" size="md" class="mb-4">
          Nuestras Acciones
        </AppBadge>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-fiba-primary-900 mb-6">
          Iniciativas y Proyectos en Marcha
        </h2>
        <p class="text-base sm:text-lg text-fiba-text-secondary leading-relaxed font-light">
          Conoce cómo llevamos el arte a las calles, las escuelas y los centros comunitarios de Panamá.
        </p>
      </div>

      <!-- Category Filter Tabs -->
      <div class="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-14">
        <button
          v-for="category in categories"
          :key="category.id"
          type="button"
          :class="[
            'px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-fiba-primary-600',
            selectedCategory === category.id
              ? 'bg-fiba-primary-700 text-white shadow-sm'
              : 'bg-white text-fiba-text-secondary hover:bg-fiba-surface-200 border border-fiba-surface-200'
          ]"
          @click="setCategory(category.id)"
        >
          {{ category.label }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="project in filteredProjects"
          :key="project.id"
          class="bg-white rounded-2xl overflow-hidden shadow-fiba-card border border-fiba-surface-200 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-fiba-elevated transition-all duration-300"
        >
          <!-- Cover visual -->
          <div>
            <div class="aspect-[16/10] bg-fiba-surface-200 overflow-hidden relative">
              <img
                :src="project.coverImage"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              >
              <div class="absolute top-4 left-4">
                <AppBadge variant="accent">{{ project.categoryLabel }}</AppBadge>
              </div>
              <div v-if="project.status === 'en-curso'" class="absolute top-4 right-4">
                <AppBadge variant="success">En curso</AppBadge>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6 sm:p-7">
              <div class="flex items-center gap-3 text-xs text-fiba-text-muted mb-2.5">
                <span class="flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 text-fiba-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {{ project.location }}
                </span>
                <span>•</span>
                <span>{{ project.year }}</span>
              </div>

              <h3 class="text-xl font-serif font-bold text-fiba-primary-900 mb-3 group-hover:text-fiba-primary-600 transition-colors">
                {{ project.title }}
              </h3>

              <p class="text-sm text-fiba-text-secondary line-clamp-3 leading-relaxed mb-6">
                {{ project.summary }}
              </p>
            </div>
          </div>

          <!-- Bottom Action Button -->
          <div class="px-6 pb-6 pt-0 border-t border-fiba-surface-100 flex items-center justify-between">
            <span v-if="project.beneficiariesCount" class="text-xs text-fiba-text-muted font-medium">
              +{{ project.beneficiariesCount }} participantes
            </span>
            <span v-else class="text-xs text-fiba-text-muted font-medium">
              Comunidad General
            </span>

            <AppButton
              variant="ghost"
              size="sm"
              @click="openProjectModal(project)"
            >
              Ver Detalle
              <template #trailing>
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </template>
            </AppButton>
          </div>
        </article>
      </div>

      <!-- Empty State if no project matches -->
      <div v-if="filteredProjects.length === 0" class="text-center py-16 bg-white rounded-2xl border border-fiba-surface-200">
        <p class="text-fiba-text-secondary text-base">No hay iniciativas registradas en esta categoría actualmente.</p>
        <AppButton
          variant="outline"
          size="sm"
          class="mt-4"
          @click="setCategory('all')"
        >
          Ver todos los proyectos
        </AppButton>
      </div>
    </div>

    <!-- Project Detail Modal -->
    <AppModal
      v-model="isModalOpen"
      :title="activeProject?.title"
      max-width="xl"
      @close="closeProjectModal"
    >
      <div v-if="activeProject" class="space-y-6">
        <div class="aspect-[16/9] rounded-xl overflow-hidden bg-fiba-surface-100">
          <img
            :src="activeProject.coverImage"
            :alt="activeProject.title"
            class="w-full h-full object-cover"
          >
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <AppBadge variant="accent">{{ activeProject.categoryLabel }}</AppBadge>
          <AppBadge variant="teal">Ubicación: {{ activeProject.location }}</AppBadge>
          <AppBadge variant="neutral">Año: {{ activeProject.year }}</AppBadge>
          <AppBadge v-if="activeProject.beneficiariesCount" variant="primary">
            +{{ activeProject.beneficiariesCount }} Beneficiarios
          </AppBadge>
        </div>

        <div>
          <h4 class="text-lg font-serif font-bold text-fiba-primary-900 mb-2">
            Acerca de la iniciativa
          </h4>
          <p class="text-sm text-fiba-text-secondary leading-relaxed whitespace-pre-line">
            {{ activeProject.fullDescription }}
          </p>
        </div>

        <div v-if="activeProject.tags && activeProject.tags.length > 0">
          <h5 class="text-xs font-semibold text-fiba-text-muted uppercase tracking-wider mb-2">
            Etiquetas
          </h5>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in activeProject.tags"
              :key="tag"
              class="px-2.5 py-1 rounded bg-fiba-surface-100 text-xs text-fiba-text-secondary"
            >
              #{{ tag }}
            </span>
          </div>
        </div>
      </div>

      <template #footer>
        <AppButton
          variant="outline"
          size="sm"
          @click="closeProjectModal"
        >
          Cerrar
        </AppButton>
        <AppButton
          href="#donaciones"
          variant="gold"
          size="sm"
          @click="closeProjectModal"
        >
          Apoyar esta Causa
        </AppButton>
      </template>
    </AppModal>
  </section>
</template>
