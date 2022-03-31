import { FC, lazy, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import { AppRouteUrls } from '../constants'
import Spinner from '../shared/Spinner'
import List from '../compos/List'
const ItemDetails = lazy(() => import('../compos/ItemDetails'))
const NotFound = lazy(() => import('./NotFound'))

const AppRoutes: FC = () => (
  <Routes>
    <Route path={AppRouteUrls.list} element={<List />} />
    <Route path={AppRouteUrls.init} element={<Navigate replace to={AppRouteUrls.list} />} />
    <Route path={AppRouteUrls.details} element={
      <Suspense fallback={<Spinner />}>
        <ItemDetails />
      </Suspense>
    } />
    <Route path="*" element={
      <Suspense fallback={<Spinner />}>
        <NotFound />
      </Suspense>
    } />
  </Routes>
)

export default AppRoutes
