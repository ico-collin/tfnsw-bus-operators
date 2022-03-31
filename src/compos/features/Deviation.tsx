/** @jsxRuntime classic */
/** @jsx jsx */
import { FC, Fragment } from 'react'
import { jsx } from '@emotion/react'

import { CreateStyles } from '../../utils'
import { CommonStrs } from '../../constants'

const styles = CreateStyles({
  onTime: {
    color: "#28a745",
    fontWeight: 'bold'
  },
  late: {
    color: "#dc3545",
    fontWeight: 'bold'
  },
  early: {
    color: "#ffc107",
    fontWeight: 'bold'
  },
  unknown: {
    color: "#007bff",
    fontWeight: 'bold'
  }
})

const Deviation: FC<{deviation: number | null | undefined}> = ({ deviation }) => {
  if (!deviation) {
    return (<span css={styles.unknown}>{CommonStrs.unknown}</span>)
  }
  return (
    <Fragment>
      {
        deviation === 0 ? <span css={styles.onTime}>{CommonStrs.onTime}</span>
          : deviation > 0 ? <span css={styles.late}>{CommonStrs.late}</span>
          : <span css={styles.early}>{CommonStrs.early}</span>
      }
    </Fragment>
  )
}

export default Deviation
