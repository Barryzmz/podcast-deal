
export interface Advertorial {
  id: string
  accountId: string
  name: string
  imageUrl?: string
  avatar?: string
  partners?: AdvertorialAccount[]
  title: string
  content: string
  startDate: string
  endDate: string
  available: boolean   
  liked: boolean        
  likeCount: number     
  commentCount: number  
}

export const DefaultAdvertorial: Advertorial = {
  id: '',
  accountId: '',
  name: '',
  imageUrl: '',
  avatar: '',
  partners: [],
  title: '',
  content: '',
  startDate: '',
  endDate: '',
  available: false,
  liked: false,
  likeCount: 0,
  commentCount: 0
}

export interface AdvertorialAccount {
  id: string
  accountId: string
  name: string
  avatar?: string
}

export interface Comment {
  id: string
  author: string
  avatarUrl: string
  content: string
  date: string
}

export interface outer_advertisement {
  id: string
  imageUrl: string
  caption: string
}