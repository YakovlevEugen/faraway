import { RECORD_DICTIONARY } from '@/types/common'

export const CHARACTER_APPEARANCE_INFO: RECORD_DICTIONARY = {
  birthYear: 'Birth Day',
  gender: 'Gender',
  height: 'Height',
  mass: 'Mass',
  hairColor: 'Hair Color',
  eyeColor: 'Eye Color',
  skinColor: 'Skin Color',
}
export const CHARACTER_APPEARANCE_INFO_KEYS = Object.keys(CHARACTER_APPEARANCE_INFO)

export const CHARACTER_INFO: RECORD_DICTIONARY = {
  name: 'Name',
  homeworld: 'Home World',
  ...CHARACTER_APPEARANCE_INFO,
}
export const CHARACTER_INFO_KEYS = Object.keys(CHARACTER_INFO)

export const CHARACTER_LINKS: RECORD_DICTIONARY = {
  films: 'Films',
  species: 'Species',
  vehicles: 'Vehicles',
  starships: 'Starships',
}
export const CHARACTER_LINKS_KEYS = Object.keys(CHARACTER_LINKS)
