import type { Meta, StoryObj } from '@storybook/react'

import Template from './index'

const meta: Meta<typeof Template> = {
  component: Template,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
