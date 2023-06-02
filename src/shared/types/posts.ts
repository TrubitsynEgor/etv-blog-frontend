import { IViewer } from './viewer'

export interface IPosts {
  _id: string
  title: string
  text: string
  viewsCount: number
  imageUrl: string
  createdAt: string
  updatedAt: string
  tags: string[]
  user: IViewer
}
