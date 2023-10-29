import type { Meta, StoryObj } from '@storybook/react'

import Characters from './index'

const meta: Meta<typeof Characters> = {
  component: Characters,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
