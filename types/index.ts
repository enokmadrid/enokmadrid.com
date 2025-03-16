export * from './models'

export interface Project {
  id: string
  slug: string
  title: string
  description: string
  content: string
  coverImage: {
    url: string
  }
  date: string
  author: {
    name: string
    picture: {
      url: string
    }
  }
}

export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: {
    url: string
  }
  date: string
  author: {
    name: string
    picture: {
      url: string
    }
  }
}

export interface Video {
  id: string
  title: string
  description: string
  url: string
  thumbnail: {
    url: string
  }
  date: string
} 