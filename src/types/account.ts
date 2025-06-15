
export interface Account {
  accountId: string
  accountName: string
  name: string
  image: string
  type: string
  introduction: string
}

export const DefaultAccount: Account = {
  accountId: '',
  accountName: '',
  name: '',
  image: '',
  type: '',
  introduction: ''
}

export interface Comment {
  id: string
  author: string
  avatarUrl: string
  content: string
  date: string
}

