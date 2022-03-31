import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const LinkButton: FC = () => {
  let navigate = useNavigate()

  return (
    <Button variant="link" onClick={() => {
      navigate(-1)
    }}>
      Back
    </Button>
  )
}

export default LinkButton
