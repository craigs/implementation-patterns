import { FC } from "react";

import Styles from "./index.module.scss";

export const Layout: FC = ({ children }) => (
  <div className={Styles.container} data-testid="container">
    {children}
  </div>
);
