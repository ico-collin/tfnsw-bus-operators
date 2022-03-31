import { FC, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux';

import Spinner from '../shared/Spinner'
import CustAlert from '../shared/CustAlert'
import LinkButton from './features/LinkButton'
import { OperatorsState, ListProps } from '../contracts/interfaces'
import { CommonStrs } from '../constants';
import { loadBusOperators } from '../reducers/busOperators/BusOperators.Action'

const List: FC<ListProps> = ({
  operators,
  error,
  loadBusOperators
}) => {
  useEffect(() => {
    const localStorageOperators = localStorage.getItem(CommonStrs.localStorageOperators)
    if (!localStorageOperators) {
      loadBusOperators()
    }
    // return () => {};
  }, [loadBusOperators])

  /* const generateList = () => busOperators.operators.map((el) => (
    <Col key={el.name + el.date} sm={12} md={6} lg={4} xl={3}>
      hi
    </Col>
  )) */

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
        <Col>
          button
        </Col>
      </Row>
      <Row>
        <Col>
          Title
        </Col>
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
