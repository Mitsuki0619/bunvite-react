import { render } from '@testing-library/react'
import { test } from 'vitest'
import { Button } from './Button'

test('renders Button component', () => {
    render(
        <Button
            onClick={function (): void {
                throw new Error('Function not implemented.')
            }}
        />
    )
})
