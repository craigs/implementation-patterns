import {render, screen} from '@testing-library/react'

import {Heading} from '..'

describe('Heading', () => {
  it('can be rendered', () => {
    render(<Heading>test</Heading>)
    const heading = screen.getByTestId('heading')

    expect(heading).toBeDefined()
  })
})
