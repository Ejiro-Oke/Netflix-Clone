import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Container = styled.section`
  display: flex;
  max-width: 1000px;
  flex-direction: column;
  padding: 70px 56px;
  margin: auto;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }

  @media (max-width: 300px) {
    padding: 70px 20px;
  }
`

export const Links = styled.div`
  margin-bottom: 24px;
`

export const Link = styled(RouterLink)`
  display: inline-block;
  color: #757575;
  margin-bottom: 16px;
  font-size: 13px;
  text-decoration: none;
  min-width: 100px;
  width: 25%;

  @media (max-width: 740px) {
    width: 33%;
  }

  @media (max-width: 500px) {
    width: 50%;
  }
`

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`