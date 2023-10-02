import { render } from '@testing-library/react'
import { test } from 'vitest'
import { CustomLink } from './CustomLink'
import { BrowserRouter } from 'react-router-dom'

test('renders CustomLink component', () => {
    render(
        <BrowserRouter>
            <CustomLink to={'/'} />
        </BrowserRouter>
    )
})
