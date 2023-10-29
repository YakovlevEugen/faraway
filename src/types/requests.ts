import { People } from './store'

export interface Request<TResult> {
  count: number
  next: string | null
  previous: string | null
  results: TResult
}

export type RequestPeople = Request<People>
