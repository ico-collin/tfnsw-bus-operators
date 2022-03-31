/** @jsxRuntime classic */
/** @jsx jsx */
import { FC } from 'react'
import { jsx } from '@emotion/react'

import { CreateStyles } from '../utils'

const styles = CreateStyles({
  container: {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    height: "2rem",
    textAlign: "center",
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    paddingTop: ".3rem",
    backgroundColor: "#333",
    color: "#fff",
    fill: "#fff"
  }
})

const Footer: FC = () => (
  <div css={styles.container}>
    Copyright {new Date().getFullYear()} © Transport for NSW
  </div>
)

export default Footer
