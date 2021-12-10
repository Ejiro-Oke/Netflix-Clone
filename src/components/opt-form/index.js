import { useState, useContext, createContext } from 'react'
import { useHistory } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import PropTypes from 'prop-types'
import {
  Container,
  Input,
  Button,
  Text,
  InputContainer,
  InputLabel,
  Break
} from './styles/opt-form';

const OptFormContext = createContext()

const OptForm = function OptForm({ children, redirectTo, ...restProps }) {
  const [value, setValue] = useState('')
  const history = useHistory()

  const onSubmit = e => {
    e.preventDefault()
    history.push(ROUTES.SIGN_UP, { value: value })
  }

  return (
    <OptFormContext.Provider value={{ value, setValue }}>
      <Container onSubmit={onSubmit} {...restProps}>{children}</Container>
    </OptFormContext.Provider>
  )
}

OptForm.Input = function OptFormInput({ placeholder, ...restProps }) {
  const { value, setValue } = useContext(OptFormContext)
  return (
    <InputContainer >
      <Input required={true} value={value} onChange={({ target }) => setValue(target.value)} {...restProps} />
      <InputLabel>{placeholder}</InputLabel>
    </InputContainer>
  )
}

OptForm.Button = ({ children, ...restProps }) => (
  <Button {...restProps}>
    {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
  </Button>
)

OptForm.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
)

OptForm.Break = ({ ...restProps }) => (
  <Break {...restProps} />
)

OptForm.propTypes = {
  children: PropTypes.any.isRequired,
  redirectTo: PropTypes.string
}

OptForm.Input.propTypes = {
  placeholder: PropTypes.string.isRequired
}

OptForm.Button.propTypes = {
  children: PropTypes.any.isRequired
}

OptForm.Text.propTypes = {
  children: PropTypes.any.isRequired
}

export default OptForm