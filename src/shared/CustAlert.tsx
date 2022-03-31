import { FC } from 'react'
import Alert from 'react-bootstrap/Alert'

const CustAlert: FC<{ message: string, variant: string }> = ({ message, variant }) => (
  <Alert variant={variant}>
    <Alert.Heading>Got an error!</Alert.Heading>
    <p>{message}</p>
  </Alert>
)

export default CustAlert
