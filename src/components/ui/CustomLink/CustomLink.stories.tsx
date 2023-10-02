import type { Meta, StoryObj } from '@storybook/react'
import { CustomLink } from './CustomLink'

type T = typeof CustomLink

export default {
    component: CustomLink,
} satisfies Meta<T>

type Story = StoryObj<T>

export const Default: Story = {
    args: {},
}
