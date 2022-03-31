import { FC } from 'react'
import { Link } from 'react-router-dom'

import { AppRouteUrls } from '../constants'

const NotFound: FC = () => (
  <>
    <h2>It looks like you're lost...</h2>
    <Link to={AppRouteUrls.list}>
      Go  Home Page
    </Link>
  </>
)

export default NotFound
