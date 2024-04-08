import { ReactNode } from "react";
import styles from './layout.module.scss';

interface Porps {
  children: ReactNode,
  info: ReactNode,
  wallet: ReactNode,
}

const UserLayout = ({ children, info, wallet }: Porps) => {
  return (
    <div className={styles.userLayout}>
      <div>用户相关</div>
      {children}
      {info}
      {wallet}
    </div>
  );
};

export default UserLayout
