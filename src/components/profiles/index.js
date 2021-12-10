import PropTypes from 'prop-types'
import {
  Container,
  Title,
  List,
  Item,
  Picture,
  Name
} from './styles/profiles'

const Profiles = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
)

Profiles.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
)

Profiles.List = ({ children, ...restProps }) => (
  <List {...restProps}>{children}</List>
)

Profiles.User = ({ children, ...restProps }) => (
  <Item {...restProps}>{children}</Item>
)

Profiles.Picture = ({ src, ...restProps }) => (
  <Picture {...restProps} src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'} />
)

Profiles.Name = ({ children, ...restProps }) => (
  <Name {...restProps}>{children}</Name>
)

Profiles.propTypes = {
  children: PropTypes.any.isRequired
}

Profiles.Title.propTypes = {
  children: PropTypes.any.isRequired
}

Profiles.List.propTypes = {
  children: PropTypes.any.isRequired
}

Profiles.User.propTypes = {
  children: PropTypes.any.isRequired
}

Profiles.Picture.propTypes = {
  src: PropTypes.string.isRequired
}

export default Profiles