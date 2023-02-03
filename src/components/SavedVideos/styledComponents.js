import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
`

export const SavedVideosContentContainer = styled.div`
  min-height: 100px;
  width: 88%;
  padding: 25px;
  margin-top: 50px;
`

export const VideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  min-height: 80vh;
  margin-top: 0px;
  list-style-type: none;
  padding-left: 0px;
  width: 100%;
`
export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`

export const NoSavedVideos = styled.img`
  width: 50%;
`
export const NoSavesVideosText = styled.h1`
  color: ${props => (!props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const NoSavedVideosSuggestion = styled.p`
  color: ${props => (!props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  border-radius: 80px;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  margin: 25px;
`

export const LinkItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 25px;
  background-color: ${props => (props.darkMode ? '#181818' : '#ffffff')};
  color: ${props => (!props.darkMode ? 'black' : '#ffffff')};
  height: 90px;
  padding: 20px;
`
export const Heading = styled.h1`
  color: ${props => (!props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`
