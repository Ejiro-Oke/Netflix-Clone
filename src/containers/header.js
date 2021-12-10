import { Header } from '../components'
import * as ROUTES from '../constants/routes'

export default function HeaderContainer({ children, showSignIn = true }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="Netflix" />
        {showSignIn ?
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink> :
          <Header.ButtonLink to={ROUTES.SIGN_UP}>Sign Up</Header.ButtonLink>
        }
      </Header.Frame>
      {children}
    </Header>
  )
}