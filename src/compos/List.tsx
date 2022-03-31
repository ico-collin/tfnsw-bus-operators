/** @jsxRuntime classic */
/** @jsx jsx */
import { FC, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux'
import { jsx } from '@emotion/react'

import Spinner from '../shared/Spinner'
import CustAlert from '../shared/CustAlert'
// import LinkButton from './features/LinkButton'
import { OperatorsState, ListProps, Operator } from '../contracts/interfaces'
import { CommonStrs, StaticTitles } from '../constants';
import { loadBusOperators } from '../reducers/busOperators/BusOperators.Action'
import { CreateStyles } from '../utils'

const styles = CreateStyles({
  operatorCol: {
    boxShadow: '0 0.0625rem 0.1875rem -0.0625rem rgba(172, 172, 172, 0.5)',
    WebkitBoxShadow: '0 0.0625rem 0.1875rem -0.0625rem rgba(172, 172, 172, 0.5)',
    MozBoxShadow: '0 0.0625rem 0.1875rem -0.0625rem rgba(172, 172, 172, 0.5)',
    marginBottom: '1rem'
  }
})

const List: FC<ListProps> = ({
  operators,
  error,
  loadBusOperators
}) => {
  const [lsOperators, setlsOperators] = useState([])

  useEffect(() => {
    const localStorageOperators = localStorage.getItem(CommonStrs.localStorageOperators)
    if (!localStorageOperators) {
      loadBusOperators()
    }
    if (localStorageOperators && typeof JSON.parse(localStorageOperators) === 'object') {
      setlsOperators(JSON.parse(localStorageOperators).operators)
    }
    // return () => {};
  }, [loadBusOperators])

  const generateList = (busOperators: Operator[]) => busOperators.map((el) => (
    <Col css={styles.operatorCol} key={el.name + el.date} sm={12} md={6} lg={4} xl={3}>
      <Card border="secondary">
        <Card.Header className="text-decoration-underline">{el.name ?? el.name}</Card.Header>
        <Card.Body>
          {/* <Card.Title>Secondary Card Title</Card.Title> */}
          <Card.Text className="text-center">
            {el.date ?? el.date}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))

  if (!operators) {
    return (<Spinner />)
  } else if (error && error.status !== -1) {
    return (
      <Container>
        <Row>
          <Col>
            <CustAlert message={error.message} variant={'danger'} />
          </Col>
        </Row>
      </Container>
    )
  }
  return (
    <Container>
      <Row>
        <Col>&nbsp;</Col>
      </Row>
      <Row>
        <Col>
          <h3 className="mb-3 fw-bold">
            {StaticTitles.listPageTitle}
          </h3>
        </Col>
      </Row>
      <Row >
        {generateList(lsOperators && lsOperators.length ? lsOperators : operators)}
      </Row>
    </Container>
  )
}

const mapStateToProps = ({
	BusOperators: {
		operators,
    error
	}
}: {
	BusOperators: OperatorsState
}) => ({
	operators,
  error
});

export default connect(mapStateToProps, {
	loadBusOperators
})(List);
