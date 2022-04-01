import { FC, useState, useEffect, Fragment } from 'react'
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

import { OperatorRoute, Operator } from '../contracts/interfaces'
import { CommonStrs } from '../constants';
import LinkButton from './features/LinkButton'
import Deviation from './features/Deviation'

const ItemDetails: FC = () => {
  let params = useParams();
  const [busRoutes, setBusRoutes] = useState([])

  useEffect(() => {
    const localStorageOperators = localStorage.getItem(CommonStrs.localStorageOperators)
    if (localStorageOperators && typeof JSON.parse(localStorageOperators) === 'object' && params.name && params.name.length) {
      const target = (JSON.parse(localStorageOperators).operators)
        .filter((el: Operator) => el.name === params.name)[0]
      setBusRoutes(target.routes)
    }
    // return () => {}
  }, [params.name])

  const handleDate = () => {
    if (params.date) {
      const date = params.date.split('-').reverse().join('/')
      return date
    }
    return params.date
  }

  const formatFirstThreeDigits = (variant: string) => {
    const variantArr = variant.split(' ');
    if (variantArr.length > 1) {
      const CHECK_ALL_DIGITS_REGEX = /^\d+$/;
      return CHECK_ALL_DIGITS_REGEX.test(variantArr[0]) ? variantArr : variant
    } else {
      return variant
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <LinkButton />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="mb-3 fw-bold">
            {params.name} -- {handleDate()}
          </h3>
        </Col>
      </Row>
      <Row >
        <Col>
        <Table striped hover responsive>
          <thead>
            <tr>
              <th>Bus Id</th>
              <th>Route Variant</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              busRoutes.map((el: OperatorRoute) => (
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>{!el.routeVariant || el.routeVariant === 'UNKNOWN' ? 'n/a'
                    : Array.isArray(formatFirstThreeDigits(el.routeVariant))
                      ? (<>
                          <b>{formatFirstThreeDigits(el.routeVariant)[0]}</b>
                          &nbsp;<span>{formatFirstThreeDigits(el.routeVariant)[1]}</span>
                          &nbsp;<span>{formatFirstThreeDigits(el.routeVariant)[2]}</span>
                        </>)
                      : formatFirstThreeDigits(el.routeVariant) }</td>
                  <td><Deviation deviation={el.deviationFromTimetable} /></td>
                </tr>
              ))
            }
          </tbody>
        </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default ItemDetails
