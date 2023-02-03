import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
  display: flex;
`
export const HomeContentContainer = styled.div`
  min-height: 100px;
  margin-top: 50px;
  width: 88%;
  padding: 25px;
`
export const InputBox = styled.input`
  border-radius: 5px;
  height: 40px;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #94a3b8;
  width: 60%;
  margin-top: 20px;
`
export const VideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  min-height: 80vh;
  margin-top: 15px;
  list-style-type: none;
  padding-left: 0px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88%;
  min-height: 80vh;
`
export const Button = styled.button`
  border: 1px solid #94a3b8;
  background-color: #ffffff;
  border-radius: 5px;
  height: 39px;
  width: 60px;
  cursor: pointer;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 250px;
  margin-top: 20px;
  display: flex;
  width: 93%;
  flex-direction: column;
  padding: 15px;
`
export const BannerLogo = styled.img`
  width: 15%;
`

export const BannerHeading = styled.p`
  width: 40%;
  font-size: 25px;
`
export const BannerButton = styled.button`
  border: 2px solid #94a3b8;
  background-color: transparent;
  border-radius: 5px;
  height: 50px;
  width: 15%;
  cursor: pointer;
`

export const CloseButton = styled.button`
  border: none;
  background-color: #ffffff;
  align-self: flex-end;
  height: 30px;
  width: 30px;
  cursor: pointer;
`

export const FailureImage = styled.img`
  margin-top: 50px;
  width: 25%;
`
export const NoSearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  width: 100%;
`

export const NoResultsMsg = styled.h1`
  color: ${props => (!props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const Suggestion = styled.p`
  color: ${props => (!props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`
export const RetryButtonInFailure = styled.button`
  background-color: #4f46e5;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  height: 40px;
  width: 10%;
`
