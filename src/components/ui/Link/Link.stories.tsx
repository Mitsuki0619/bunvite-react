import type { Meta, StoryObj } from "@storybook/react"
import { Link } from './Link'

type T = typeof Link

export default {
  component: Link,
} satisfies Meta<T>

type Story = StoryObj<T>

export const Default: Story = {
  args: {},
}