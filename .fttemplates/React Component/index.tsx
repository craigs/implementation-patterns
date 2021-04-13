import { FC } from 'react'

import Styles from './index.module.scss'

interface <FTName | pascalCase>Props {
  name: string
}

export const <FTName | pascalcase>: FC<<FTName | pascalCase>Props> = ({name}) => (
  <div className={Styles.container} data-testid="<FTName | camelcase>">
    {name}
  </div>
)
