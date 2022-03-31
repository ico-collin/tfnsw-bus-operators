import { FC, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux';

import LinkButton from './features/LinkButton'
import { OperatorsState, ListProps } from '../contracts/interfaces'
import { CommonStrs } from '../constants';
import { loadBusOperators } from '../reducers/busOperators/BusOperators.Action'

const busOperators = {
  operators: [
    {
      name: "Sydney Buses",
      date: "25/09/2021",
      routes: [
        {
          id: "42612",
          routeVariant: "891 2 1",
          deviationFromTimetable: 77
        },
        {
          id: "29016",
          routeVariant: "400 1 1",
          deviationFromTimetable: 340
        },
        {
          id: "90467",
          routeVariant: "393 1 1",
          deviationFromTimetable: 220
        },
        {
          id: "88836",
          routeVariant: "M20 1 0",
          deviationFromTimetable: -287
        },
        {
          id: "79367",
          routeVariant: "L21 2 1",
          deviationFromTimetable: 347
        }
      ]
    },
    {
      name: "Westbus",
      date: "25/09/2021",
      routes: [
        {
          id: "94811",
          routeVariant: "664 2 1",
          deviationFromTimetable: 164
        },
        {
          id: "62788",
          routeVariant: "UNKNOWN",
          deviationFromTimetable: null
        },
        {
          id: "14221",
          routeVariant: "834 1 1",
          deviationFromTimetable: 423
        }
      ]
    }
  ]
}

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
    return (<>hi...</>)
  } else if (error && error.status !== -1) {
    return (<>error</>)
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
