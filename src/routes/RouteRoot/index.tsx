import { Outlet } from 'react-router-dom'

import LayoutDefault from '@/layouts/LayoutDefault'

export default function RouteRoot() {
  return (
    <LayoutDefault>
      <Outlet />
    </LayoutDefault>
  )
}
