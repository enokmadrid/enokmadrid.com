import { defineStore } from 'pinia'
import type { Project, Article, Video } from '../types/models'

export const useAppStore = defineStore('app', {
  state: () => ({
    projects: [] as Project[],
    articles: [] as Article[],
    videos: [] as Video[],
    activeProject: null as Project | null,
    currentPage: null as string | null,
    navClass: '' as string
  }),

  getters: {
    getNavClass: (state) => state.navClass,
    getProjectBySlug: (state) => {
      return (slug: string) => state.projects.find(project => project.slug === slug)
    },
    getArticleBySlug: (state) => {
      return (slug: string) => state.articles.find(article => article.slug === slug)
    }
  },

  actions: {
    setProjects(projects: Project[]) {
      this.projects = projects
    },
    setActiveProject(project: Project) {
      this.activeProject = project
    },
    setCurrentPage(path: string) {
      this.currentPage = path
    },
    setNavClass(classname: string) {
      this.navClass = classname
    },
    setVideos(videos: Video[]) {
      this.videos = videos
    },
    setArticles(articles: Article[]) {
      this.articles = articles
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
      this.setNavClass(classname)
    }
  }
}) 