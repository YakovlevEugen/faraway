import { z } from 'zod'

// People
const personDefault = {
  name: '',
  height: '',
  mass: '',
  hairColor: '',
  skinColor: '',
  eyeColor: '',
  birthYear: '',
  gender: '',
  homeworld: '',
  films: [],
  species: [],
  vehicles: [],
  starships: [],
}

const PersonBase = z.object({
  name: z.string().catch(personDefault.name),
  height: z.string().catch(personDefault.height),
  mass: z.string().catch(personDefault.mass),
  hairColor: z.string().catch(personDefault.hairColor),
  skinColor: z.string().catch(personDefault.skinColor),
  eyeColor: z.string().catch(personDefault.eyeColor),
  birthYear: z.string().catch(personDefault.birthYear),
  gender: z.string().catch(personDefault.gender),
  homeworld: z.string().catch(personDefault.homeworld),
  films: z.string().array().catch(personDefault.films),
  species: z.string().array().catch(personDefault.species),
  vehicles: z.string().array().catch(personDefault.vehicles),
  starships: z.string().array().catch(personDefault.starships),
  // created: z.string().catch(personDefault.created),
  // edited: z.string().catch(personDefault.edited),
  // url: z.string().catch(personDefault.url),
})

export const Person = PersonBase.catch(personDefault)
export const People = Person.array().catch([])
