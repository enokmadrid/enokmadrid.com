import gql from 'graphql-tag'
import type { Project, Article, Video } from '../types/models'

export const projectsQuery = gql`
  query Projects {
    projects {
      id
      slug
      title
      description
      content
      coverImage {
        url
      }
      date
      author {
        name
        picture {
          url
        }
      }
    }
  }
`

export const articlesQuery = gql`
  query Articles {
    articles {
      id
      slug
      title
      excerpt
      content
      coverImage {
        url
      }
      date
      author {
        name
        picture {
          url
        }
      }
    }
  }
`

export const videosQuery = gql`
  query Videos {
    videos {
      id
      title
      description
      url
      thumbnail {
        url
      }
      date
    }
  }
`

export interface ProjectsData {
  projects: Project[]
}

export interface ArticlesData {
  articles: Article[]
}

export interface VideosData {
  videos: Video[]
} 