import type { Meta, StoryObj } from '@storybook/react'

import CharacterForm from './index'

import { getMockResult } from '@/helpers/storybook'
import personGetJSON from '@/mocks/json/v1/person-get.json'

const meta: Meta<typeof CharacterForm> = {
  component: CharacterForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: 'black', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Create: Story = {}

export const Edit: Story = {
  args: {
    defaultValues: getMockResult(personGetJSON),
  },
}
