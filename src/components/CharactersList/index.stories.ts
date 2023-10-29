import type { Meta, StoryObj } from '@storybook/react'

import CharactersList from './index'

import { getMockResult } from '@/helpers/storybook'
import peopleGetJSON from '@/mocks/json/v1/people-get.json'

const meta: Meta<typeof CharactersList> = {
  component: CharactersList,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    characters: getMockResult(peopleGetJSON).results,
  },
}
