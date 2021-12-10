import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Form } from "../components"
import HeaderContainer from "../containers/header"
import FooterContainer from "../containers/footer"
import * as ROUTES from '../constants/routes'
import { FirebaseContext } from '../context/firebase'

export default function Signup() {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)
  const [error, setError] = useState('')
  const [firstName, setFirstName] = useState('')
  const [emailAddress, setEmailAddress] = useState(history.location.state ? history.location.state.value : '')
  const [password, setPassword] = useState('')

  const isInvalid = firstName === '' || password === '' || emailAddress === ''

  const handleSignUp = (e) => {
    e.preventDefault()

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user.updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1
        })
          .then(() => {
            history.push(ROUTES.BROWSE)
          })
      }).catch((error) => {
        setEmailAddress('')
        setPassword('')
        setError(error.message)
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          <Form.Text>This is a clone! Do not put in your real info!</Form.Text>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignUp}>
            <Form.Input
              aria-label="first name"
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              aria-label="email address"
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              aria-label="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              autoComplete="off"
            />
            <Form.Submit disabled={isInvalid}>Sign Up</Form.Submit>
          </Form.Base>

          <Form.Text>Already watching? <Form.Link to={ROUTES.SIGN_IN}>Sign In now</Form.Link></Form.Text>
          <Form.TextSmall>This page is (not) protected by Google reCAPTCHA.</Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}