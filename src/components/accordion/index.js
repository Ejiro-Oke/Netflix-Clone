import { useState, useContext, createContext } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Inner,
  Title,
  Header,
  Body,
  Item,
  Frame
} from './styles/accordion'

const ToggleContext = createContext()

const Accordion = ({ children, ...restProps }) => (
  <Container {...restProps}>
    <Inner>{children}</Inner>
  </Container>
)

Accordion.Frame = ({ children, ...restProps }) => {
  return <Frame {...restProps}>{children}</Frame>;
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ToggleContext.Provider value={{ isOpen, setIsOpen }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  )
}

Accordion.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
)

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { isOpen, setIsOpen } = useContext(ToggleContext)

  return (
    <Header onClick={() => setIsOpen(!isOpen)}{...restProps}>
      { children}
      {isOpen ?
        <img src="/images/icons/close-slim.png" alt="Close" /> :
        <img src="/images/icons/add.png" alt="Open" />
      }
    </Header>
  )
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { isOpen } = useContext(ToggleContext)

  return isOpen ? <Body {...restProps}>{children}</Body> : null
}

Accordion.propTypes = {
  children: PropTypes.any.isRequired
}

Accordion.Frame.propTypes = {
  children: PropTypes.any.isRequired
}

Accordion.Item.propTypes = {
  children: PropTypes.any.isRequired
}

Accordion.Title.propTypes = {
  children: PropTypes.string.isRequired
}

Accordion.Header.propTypes = {
  children: PropTypes.any.isRequired
}
Accordion.Body.propTypes = {
  children: PropTypes.any.isRequired
}

export default Accordion