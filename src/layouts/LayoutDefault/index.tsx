import { DingdingOutlined } from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import { ReactNode } from 'react'
import { NavLink, Link } from 'react-router-dom'

import type { MenuProps } from 'antd'

import styles from './styles.module.scss'

interface Props {
  children: ReactNode | ReactNode[]
}

const { Header, Content, Footer } = Layout

const SIDEBAR_MENU: MenuProps['items'] = [
  {
    key: 'home',
    icon: <DingdingOutlined />,
    label: <NavLink to="/">Characters</NavLink>,
  },
]

export default function App({ children, ...otherProps }: Props) {
  const {
    token: { colorTextBase },
  } = theme.useToken()

  const currentYear = new Date().getFullYear()

  return (
    <Layout {...otherProps} className={styles.LayoutDefault} style={{ color: colorTextBase }}>
      <Header className={styles.LayoutDefault__Header}>
        <Link to="/">
          <img src="/images/logo.svg" alt="Logo" className={styles.LayoutDefault__Logo} />
        </Link>
        <Menu mode="horizontal" items={SIDEBAR_MENU} className={styles.LayoutDefault__Menu} />
      </Header>
      <Content className={styles.LayoutDefault__Content}>
        <div className={styles.LayoutDefault__Inner}>{children}</div>
      </Content>
      <Footer>
        <div className={styles.LayoutDefault__Inner}>©{currentYear} Created by Iakovlev Eugen</div>
      </Footer>
    </Layout>
  )
}
