import { defineStore } from 'pinia'
import { useGraphQL } from '~/composables/useGraphQL'
import projectsQuery from '~/graphql/projects.gql'
import articlesQuery from '~/graphql/articles.gql'
import videosQuery from '~/graphql/videos.gql'

export const useContentStore = defineStore('content', {
  state: () => ({
    projects: [],
    articles: [],
    videos: [],
    activeProject: null,
    currentPage: null,
    navClass: ''
  }),

  getters: {
    getNavClass: (state) => state.navClass,
    getProjectBySlug: (state) => (slug: string) => 
      state.projects.find(project => project.slug === slug),
    getArticlesBySlug: (state) => (slug: string) => 
      state.articles.find(article => article.slug === slug)
  },

  actions: {
    async fetchAllContent() {
      const { queryGraphQL } = useGraphQL()
      
      // Fetch projects
      const { data: projectsData } = await queryGraphQL(projectsQuery)
      if (projectsData) {
        this.projects = projectsData.projects.reverse()
      }

      // Fetch articles
      const { data: articlesData } = await queryGraphQL(articlesQuery)
      if (articlesData) {
        this.articles = articlesData.articles
      }

      // Fetch videos
      const { data: videosData } = await queryGraphQL(videosQuery)
      if (videosData) {
        this.videos = videosData.videos
      }
    },

    setActiveProject(project: any) {
      this.activeProject = project
    },

    setCurrentPage(path: string) {
      this.currentPage = path
    },

    updateNavClass() {
      let classname: string
      if (this.currentPage === '/') {
        classname = 'navbar-split'
      } else if (this.currentPage === '/about') {
        classname = 'navbar-transparent'
      } else {
        classname = 'navbar-dark'
      }
      this.navClass = classname
    }
  }
}) 