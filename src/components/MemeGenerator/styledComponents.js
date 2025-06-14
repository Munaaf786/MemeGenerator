import styled from 'styled-components/macro'

export const App = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
`

export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 550px;
  @media screen and (min-width: 767px) {
    align-items: flex-start;
    max-width: 1100px;
  }
`
export const Heading = styled.h1`
  font-family: 'Open Sans';
  font-size: 40px;
  font-weight: bold;
  color: #35469c;
`

export const MemeAndFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url('${props => props.bgImageUrl}');
  background-size: cover;
  width: 100%;
  height: 375px;
  margin-bottom: 20px;
  order: 1;
  @media screen and (min-width: 767px) {
    width: 56%;
    order: 2;
  }
`

export const TextContent = styled.p`
  font-family: 'Open Sans';
  font-size: ${props => props.activeFontSizeOption}px;
  color: #ffffff;
  font-weight: 600;
`

export const MemeForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  order: 2;
  @media screen and (min-width: 767px) {
    width: 40%;
    order: 1;
  }
`

export const CustomLabel = styled.label`
  font-family: 'Open Sans';
  font-size: 14px;
  color: #7e858e;
  font-weight:: 500;
  margin-bottom: 6px;
  @media screen and (min-width: 767px) {
    font-size: 16px;
  }
`

export const CustomInput = styled.input`
  height: 40px
  width: 100%;
  background-color: transparent;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  margin-bottom: 12px;
  padding: 10px;
  font-family: 'Open Sans';
  font-size: 14px;
  color: #5a7184;
  outline: none;
  @media screen and (min-width: 767px) {
    font-size: 16px;
    margin-bottom: 16px;
  }
`

export const CustomSelect = styled.select`
  height: 40px
  width: 100%;
  background-color: transparent;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  margin-bottom: 12px;
  padding: 10px;
  font-family: 'Open Sans';
  font-size: 14px;
  color: #5a7184;
  @media screen and (min-width: 767px) {
    font-size: 16px;
    margin-bottom: 16px;
  }
`

export const CustomOption = styled.option`
  color: #1e293b;
  font-family: 'Open Sans';
  font-size: 14px;
`

export const CustomButton = styled.button`
  height: 44px;
  width: 180px;
  background-color: #0b69ff;
  color: #ffffff;
  text-align: center;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  font-family: 'Open Sans';
  font-size: 16px;
  margin-top: 16px;
`
