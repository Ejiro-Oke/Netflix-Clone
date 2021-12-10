import PropTypes from 'prop-types'
import {
  Container,
  Item,
  Inner,
  Title,
  SubTitle,
  Image,
  Pane
} from './styles/jumbotron'

const Jumbotron = ({ children, direction = 'row', ...restProps }) => (
  <Item {...restProps}>
    <Inner direction={direction}>{children}</Inner>
  </Item>
)

Jumbotron.Container = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
)

Jumbotron.Pane = ({ children, ...restProps }) => (
  <Pane {...restProps}>{children}</Pane>
)

Jumbotron.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
)

Jumbotron.SubTitle = ({ children, ...restProps }) => (
  <SubTitle {...restProps}>{children}</SubTitle>
)

Jumbotron.Image = ({ src, alt, ...restProps }) => (
  <Image src={src} alt={alt} {...restProps} />
)

Jumbotron.propTypes = {
  children: PropTypes.any.isRequired,
  direction: PropTypes.oneOf([
    'row', 'column', 'row-reverse', 'column-reverse'
  ])
}

Jumbotron.Container.propTypes = {
  children: PropTypes.any.isRequired
}

Jumbotron.Pane.propTypes = {
  children: PropTypes.any.isRequired
}

Jumbotron.Title.propTypes = {
  children: PropTypes.any.isRequired
}

Jumbotron.SubTitle.propTypes = {
  children: PropTypes.any.isRequired
}

Jumbotron.Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Jumbotron