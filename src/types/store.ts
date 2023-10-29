import { z } from 'zod'

import { People, Person } from '@/zod'

export type People = z.infer<typeof People>
export type Person = z.infer<typeof Person>
