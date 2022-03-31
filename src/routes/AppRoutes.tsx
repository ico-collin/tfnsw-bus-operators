import { FC, lazy, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import { AppRouteUrls } from '../constants'
import Spinner from '../shared/Spinner'
import List from '../compos/List'
const NotFound = lazy(() => import('./NotFound'))

const AppRoutes: FC = () => (
  <Routes>
    <Route path={AppRouteUrls.list} element={<List />} />
    <Route path={AppRouteUrls.init} element={<Navigate replace to={AppRouteUrls.list} />} />
    <Route path="*" element={
      <Suspense fallback={<Spinner />}>
        <NotFound />
      </Suspense>
    } />
  </Routes>
)

export default AppRoutes
