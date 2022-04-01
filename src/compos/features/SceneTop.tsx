/** @jsxRuntime classic */
/** @jsx jsx */
import { FC, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { jsx } from '@emotion/react'

import { CreateStyles } from '../../utils'
import { StaticTitles } from '../../constants'
import LinkButton from './LinkButton'
import { FormatDate } from '../../utils'

const styles = CreateStyles({
  heightKeeper: {
    height: '2.375rem'
  }
})

const SceneTop: FC = () => {
  let params = useParams();

  return (
    <Fragment>
      <Row>
        {params.name && params.name.length
          ? <Col><LinkButton /></Col> : <Col css={styles.heightKeeper}>&nbsp;</Col>}
      </Row>
      <Row>
        <Col>
          {params.name && params.name.length
            ? <h3 className="mb-3 fw-bold">
            {params.name} -- {FormatDate(String(params.date))}
            </h3>
            : <h3 className="mb-3 fw-bold">
            {StaticTitles.listPageTitle}
            </h3>}
        </Col>
      </Row>
    </Fragment>
  )
}

export default SceneTop
