import styled from 'styled-components'

export const ListItem = styled.li``
export const VideoImage = styled.img`
  width: 70%;
`
export const Title = styled.p`
  font-size: 18px;
  color: ${props => (props.darkMode ? '#94a3b8' : '#181818')};
`

export const ViewCount = styled.p`
  font-size: 15px;
  color: #616e7c;
  margin-right: 15px;
`
