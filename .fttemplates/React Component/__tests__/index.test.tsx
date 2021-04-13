import {render, screen} from '@testing-library/react'

import {<FTName | pascalcase>} from '..'

describe('<FTName | pascalcase>', () => {
  it('can be rendered', () => {
    render(<<FTName | pascalcase> name="test" />)
    const <FTName | camelcase> = screen.getByTestId('<FTName | camelcase>')

    expect(<FTName | camelcase>).toBeDefined()
  })
})
