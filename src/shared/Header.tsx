/** @jsxRuntime classic */
/** @jsx jsx */
import { FC } from 'react'
import { jsx } from '@emotion/react'

import logo from '../_assets/tfNswlogo-192.png'
import { CreateStyles } from '../utils'

const styles = CreateStyles({
  container: {
    boxShadow: '0 0.0625rem 0.1875rem -0.0625rem rgba(172, 172, 172, 0.5)',
    WebkitBoxShadow: '0 0.0625rem 0.1875rem -0.0625rem rgba(172, 172, 172, 0.5)',
    MozBoxShadow: '0 0.0625rem 0.1875rem -0.0625rem rgba(172, 172, 172, 0.5)',
    borderBottom: '0.0625rem solid #fafafa',
    marginBottom: '0.6rem'
  },
  imgContainer: {
    height: '3.6875rem'
  }
})

const Header: FC = () => (
  <div css={styles.container}>
    <img css={styles.imgContainer} src={logo} alt="header-logo" />
  </div>
)

export default Header
