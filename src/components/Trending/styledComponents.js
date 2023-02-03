import styled from 'styled-components'

export const TrendingContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (!props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
`
export const TrendingContentContainer = styled.div`
  min-height: 100px;
  width: 88%;
  padding: 25px;
  margin-top: 50px;
`

export const Heading = styled.h1`
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
  margin-bottom: 30px;
  margin-top: 30px;
  font-size: 25px;
  background-color: ${props => (props.darkMode ? '#181818' : '#ffffff')};
  color: ${props => (!props.darkMode ? 'black' : '#ffffff')};
  height: 90px;
  padding: 20px;
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
