import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
  
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;
  border-left: 1px solid #333;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
    
  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;
        
    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  &:hover {
    background: #f40612;
  }
    
  @media (max-width: 1000px) {
    border: none;
    border-radius: 2px;
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`

export const Text = styled.p`
  font-size: 19px;
  color: white;
  text-align: center;
    
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`

export const InputContainer = styled.div`
  position: relative;
  max-width: 450px;
  width: 100%; 
  height: 70px;
  overflow: hidden;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;

  @media (max-width: 1000px) {
    border-radius: 2px;
  }
`

export const InputLabel = styled.label`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 0;
  margin-left: 10px;
  transform: translateY(-50%);
  pointer-events: none;
  color: #8C8C8C;
  font-weight: bold;
  transition: .1s ease;
`

export const Input = styled.input`
  outline: none;
  position: absolute;
  width: 100%;
  border: none;
  padding: 10px 10px 0 10px;
  box-sizing: border-box;
  font-size: 16px;
  height: 100%;
  left: 0;
  border: 1px solid #8C8C8C;

  &:focus {
    border: 1px solid #0771EB;
  }

  &:valid + ${InputLabel},
  &:focus + ${InputLabel} {
    transform: translateY(-175%);
    font-size: 13px;
  }
`

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`