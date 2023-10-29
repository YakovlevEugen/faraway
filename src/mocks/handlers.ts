import { rest, RestHandler } from 'msw'

import { formatApiUrl } from '@/helpers/url'

import personGetJSON from './json/v1/person-get.json'
import peopleGetJSON from './json/v1/people-get.json'

const DELAY = 500

export const mockHandlers: RestHandler[] = [
  rest.get(formatApiUrl('people'), (_req, res, ctx) => {
    return res(ctx.delay(DELAY), ctx.json(peopleGetJSON))
  }),
  rest.get(formatApiUrl('people/*'), (_req, res, ctx) => {
    return res(ctx.delay(DELAY), ctx.json(personGetJSON))
  }),
]
