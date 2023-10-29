import type { Meta, StoryObj } from '@storybook/react'

import CharactersCard from './index'

import { getMockResult } from '@/helpers/storybook'
import personGetJSON from '@/mocks/json/v1/person-get.json'

const meta: Meta<typeof CharactersCard> = {
  component: CharactersCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    character: getMockResult(personGetJSON),
  },
}
