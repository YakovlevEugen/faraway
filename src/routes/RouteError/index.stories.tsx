import type { Meta, StoryObj } from '@storybook/react'

import ErrorRoute from './index.tsx'

import styles from './styles.module.scss'

const meta = {
  component: ErrorRoute,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className={styles.ErrorRoute__StorybookDecorator}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ErrorRoute>

export default meta
type Story = StoryObj<typeof meta>

export const Status403: Story = {
  args: {
    status: 403,
  },
}

export const Status404: Story = {
  args: {
    status: 404,
  },
}
