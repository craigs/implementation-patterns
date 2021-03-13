import Styles from './index.module.scss'

export const Heading = ({children}) => (
  <h1 className={Styles.heading} data-testid="heading">
    {children}
  </h1>
)
