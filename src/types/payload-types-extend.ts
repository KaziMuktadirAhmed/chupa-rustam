import { Footer as OriginalFooter } from '@/payload-types'

export interface ExtendedFooter extends OriginalFooter {
  quickLinks?: Array<{
    label: string
    link: any
  }>
  popularServices?: Array<{
    label: string
    link: any
  }>
  technologyStacks?: Array<{
    category: string
    technologies: string
  }>
  socialLinks?: Array<{
    platform: 'linkedin' | 'github' | 'twitter' | 'facebook' | 'instagram'
    url: string
    id?: string | null
  }>
  subscriptionEnabled?: boolean
  copyrightText?: string
}
