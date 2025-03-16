import { useAppStore } from '~/stores/app'
import { projectsQuery, articlesQuery, videosQuery } from '~/graphql/queries'
import type { ProjectsData, ArticlesData, VideosData } from '~/graphql/queries'

export default defineNuxtPlugin(async (nuxtApp) => {
  const appStore = useAppStore()
  const apollo = useApollo()

  if (!apollo.clients?.default) {
    console.error('Apollo client not initialized')
    return
  }

  try {
    // Fetch projects
    const { data: projectsData } = await apollo.clients.default.query<ProjectsData>({
      query: projectsQuery
    })
    appStore.setProjects(projectsData.projects.reverse())

    // Fetch articles
    const { data: articlesData } = await apollo.clients.default.query<ArticlesData>({
      query: articlesQuery
    })
    appStore.setArticles(articlesData.articles)

    // Fetch videos
    const { data: videosData } = await apollo.clients.default.query<VideosData>({
      query: videosQuery
    })
    appStore.setVideos(videosData.videos)
  } catch (error) {
    console.error('Error initializing app data:', error)
  }
}) 