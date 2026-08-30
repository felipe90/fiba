import { ref, computed } from 'vue'
import { FEATURED_PROJECTS } from '~/constants/content'
import type { Project, ProjectCategory } from '~/types/content'

export const useProjects = () => {
  const selectedCategory = ref<ProjectCategory | 'all'>('all')

  const categories: Array<{ id: ProjectCategory | 'all'; label: string }> = [
    { id: 'all', label: 'Todos los Proyectos' },
    { id: 'educacion', label: 'Educación' },
    { id: 'comunidad', label: 'Comunidad' },
    { id: 'artes-plasticas', label: 'Artes Plásticas' },
    { id: 'musica', label: 'Música' },
    { id: 'exposiciones', label: 'Exposiciones' }
  ]

  const allProjects = computed<Project[]>(() => FEATURED_PROJECTS)

  const featuredProjects = computed<Project[]>(() => {
    return FEATURED_PROJECTS.filter(project => project.featured)
  })

  const filteredProjects = computed<Project[]>(() => {
    if (selectedCategory.value === 'all') {
      return FEATURED_PROJECTS
    }
    return FEATURED_PROJECTS.filter(project => project.category === selectedCategory.value)
  })

  const getProjectBySlug = (slug: string): Project | undefined => {
    return FEATURED_PROJECTS.find(project => project.slug === slug)
  }

  const setCategory = (category: ProjectCategory | 'all') => {
    selectedCategory.value = category
  }

  return {
    allProjects,
    featuredProjects,
    filteredProjects,
    categories,
    selectedCategory,
    setCategory,
    getProjectBySlug
  }
}
