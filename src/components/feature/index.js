import PropTypes from 'prop-types'
import {
  Container,
  Title,
  SubTitle
} from './styles/feature'

const Feature = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
)

Feature.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
)

Feature.SubTitle = ({ children, ...restProps }) => (
  <SubTitle {...restProps}>{children}</SubTitle>
)

Feature.propTypes = {
  children: PropTypes.any.isRequired
}

Feature.Title.propTypes = {
  children: PropTypes.string.isRequired
}

Feature.SubTitle.propTypes = {
  children: PropTypes.string.isRequired
}

export default Feature