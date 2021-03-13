import Styles from './index.module.scss'

export const Layout = ({children}) => (
  <div className={Styles.container} data-testid="container">
    {children}
  </div>
)
