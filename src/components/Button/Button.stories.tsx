import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

type T = typeof Button

export default {
    component: Button,
} satisfies Meta<T>

type Story = StoryObj<T>

export const Default: Story = {
    args: {},
}
