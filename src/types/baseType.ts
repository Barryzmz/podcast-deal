export interface Account {
  avatar: string
  accountId: string
  accountName: string
  name: string
  type: string
  introduction: string
}

export const DefaultAccount: Account = {
  accountId: '',
  accountName: '',
  name: '',
  avatar: '',
  type: '',
  introduction: ''
}

export interface Comment {
  id: string
  accountName: string
  avatar: string
  content: string
  date: string
  liked: boolean        
  likeCount: number     
}

export interface Advertorial {
  id: string
  account: Account
  partners?: Account[]
  title: string
  content: string
  startDate: string
  endDate: string
  date: string
  available: boolean   
  liked: boolean        
  likeCount: number     
  commentCount: number  
}

export const DefaultAdvertorial: Advertorial = {
  id: '',
  account: DefaultAccount,
  partners: [],
  title: '',
  content: '',
  startDate: '',
  endDate: '',
  date: '',
  available: false,
  liked: false,
  likeCount: 0,
  commentCount: 0
}

export interface outer_advertisement {
  id: string
  imageUrl: string
  caption: string
}