import {render, screen} from '@testing-library/react'

import {Layout} from '..'

describe('Layout', () => {
  it('can be rendered', () => {
    render(<Layout>content</Layout>)
    const layout = screen.getByTestId('container')

    expect(layout).toBeDefined()
  })
})
