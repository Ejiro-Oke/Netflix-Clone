import PropTypes from 'prop-types'
import {
  LockBody,
  ReleaseBody,
  Spinner,
  Picture
} from './styles/loading';

const Loading = ({ src, ...restProps }) => {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />
}

Loading.propTypes = {
  src: PropTypes.string.isRequired
}

Loading.ReleaseBody.propTypes = {}

export default Loading