import styled from 'styled-components'

export const PopupContainer = styled.div`
  width: 50%;
`
export const LogoutButton = styled.button`
  height: 35px;
  color: ${props => (props.darkMode ? '#ffffff' : '#3b82f6')};
  background-color: ${props => (props.darkMode ? '#181818' : '#ffffff')};
  border: 2px solid ${props => (props.darkMode ? '#ffffff' : '#3b82f6')};
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => (props.darkMode ? '#ffffff' : '#3b82f6')};
  background-color: ${props => (props.darkMode ? '#181818' : '#ffffff')};
  min-height: 20vh;
`
export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 25px;
  width: 50%;
`

export const WarningMessage = styled.p`
  color: ${props => (props.darkMode ? '#ffffff' : '#00306e')};
  font-size: 18px;
`

export const PopupButton = styled.button`
  height: 35px;
  color: ${props => (props.outline ? '#181818' : '#ffffff')};
  background-color: ${props => (props.outline ? '#ffffff' : '#3b82f6')};
  border: 2px solid ${props => (props.outline ? '#181818' : '#3b82f6')};
  border-radius: 5px;
  width: 100%;
  margin-right: 20px;
  cursor: pointer;
`
