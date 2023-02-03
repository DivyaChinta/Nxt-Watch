import styled from 'styled-components'

export const SideBarContainer = styled.ul`
  min-height: 100vh;
  width: 18%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;
  list-style-type: none;
  margin-top: 0px;
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
`
export const OptionItem = styled.li`
  margin-bottom: 30px;
  font-size: 18px;
`
export const OptionsContainer = styled.div`
  margin: 0px;
  top: 100px;
  position: fixed;
`
export const ContactUsContainer = styled.div`
  color: ${props => (props.darkMode ? '#f9f9f9' : '#181818')};
  height: 200px;
  top: 80vh;
  position: fixed;
  width: 15%;
`
export const ContactUsHeading = styled.p`
  font-size: 15px;
  padding-left: 20px;
`
export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 50px;
  margin: 0px 10px 0px 15px;
`
export const SocialMediaIcon = styled.img`
  width: 40px;
  height: 40px;
`
export const ContactUsDescription = styled.p`
  font-size: 15px;
  padding-left: 20px;
  position: static;
`
