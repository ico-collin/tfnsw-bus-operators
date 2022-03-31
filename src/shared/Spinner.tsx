import { FC } from 'react'
import styled from '@emotion/styled'

const SpinnerContainer = styled('div')`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(168, 168, 168, 0.5);
  z-index: 1;
`

const Spinner: FC = () => (
  <SpinnerContainer>
    <div className="loader">Loading...</div>
  </SpinnerContainer>
)

export default Spinner
