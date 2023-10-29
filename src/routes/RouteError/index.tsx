import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { Typography } from 'antd'
import LayoutDefault from '@/layouts/LayoutDefault'

import styles from './styles.module.scss'

type Status = 403 | 404

export type Props = {
  /** Error status */
  status: Status
}

const description: Record<Status, string> = {
  403: 'Forbidden',
  404: 'Not Found',
}

const { Title } = Typography

export default function RouteError({ status }: Props) {
  const title = `${status} - Faraway`

  return (
    <LayoutDefault>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className={styles.ErrorRoute}>
        <Title level={1} className={styles.ErrorRoute__Title}>
          {status}
        </Title>
        <div className={styles.ErrorRoute__Description}>{description[status]}</div>
        <nav className={styles.ErrorRoute__Links}>
          <Link to="/">Home</Link>
        </nav>
      </div>
    </LayoutDefault>
  )
}
