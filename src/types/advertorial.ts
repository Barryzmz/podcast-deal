
export interface Advertorial {
  id: string
  podcasterName: string
  name: string
  imageUrl?: string
  avatar?: string
  title: string
  content: string
  dateTime: string
  available: boolean   
}

export interface Comment {
  id: string
  author: string
  avatarUrl: string
  content: string
  date: string
}