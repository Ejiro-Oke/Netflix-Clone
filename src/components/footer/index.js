import PropTypes from 'prop-types'
import {
  Container,
  Links,
  Link,
  Title,
  Text
} from './styles/footer'

const Footer = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
)

Footer.Links = ({ children, ...restProps }) => (
  <Links {...restProps}>{children}</Links>
)

Footer.Link = ({ to, children, ...restProps }) => {
  return <Link to={to} {...restProps}>{children}</Link>
}

Footer.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}

Footer.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>
}

Footer.propTypes = {
  children: PropTypes.any.isRequired
}

Footer.Links.propTypes = {
  children: PropTypes.any.isRequired
}

Footer.Link.propTypes = {
  to: PropTypes.string.isRequired
}

Footer.Title.propTypes = {
  children: PropTypes.string.isRequired
}

Footer.Text.propTypes = {
  children: PropTypes.any.isRequired
}

export default Footer