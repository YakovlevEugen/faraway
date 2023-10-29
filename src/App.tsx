import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from 'react-router-dom'

import RouteCharacter from '@/routes/RouteCharacter'
import RouteCharacterEdit from '@/routes/RouteCharacterEdit'
import RouteCharacters from '@/routes/RouteCharacters'
import RouteError from '@/routes/RouteError'
import RouteRoot from '@/routes/RouteRoot'

import '@/assets/styles/index.scss'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<RouteRoot />}>
        <Route index element={<RouteCharacters />} />
        <Route path="/character/:id" element={<RouteCharacter />} />
        <Route path="/character/:id/edit" element={<RouteCharacterEdit />} />
      </Route>
      <Route path="*" element={<RouteError status={404} />} />
    </>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
