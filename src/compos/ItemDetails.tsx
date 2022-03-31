/** @jsxRuntime classic */
/** @jsx jsx */
import { FC, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { jsx } from '@emotion/react'

import { CreateStyles } from '../utils'
import { OperatorRoute, Operator } from '../contracts/interfaces'
import { CommonStrs } from '../constants';
import LinkButton from './features/LinkButton'

const ItemDetails: FC = () => {
  let params = useParams();
  const [busRoutes, setBusRoutes] = useState([])

  useEffect(() => {
    const localStorageOperators = localStorage.getItem(CommonStrs.localStorageOperators)
    if (localStorageOperators && typeof JSON.parse(localStorageOperators) === 'object' && params.name && params.name.length) {
      const target = (JSON.parse(localStorageOperators).operators)
        .filter((el: Operator) => el.name === params.name)[0]
      setBusRoutes(target.routes)
      debugger
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
        <Col>hi...</Col>
      </Row>
    </Container>
  )
}

export default ItemDetails
