import styled from 'styled-components/native'
import {Platform} from 'react-native'

export const Container = styled.View`
  flex: 1;
  background-color: #132742;
`;

export const Title = styled.Text`
  margin-Top: ${Platform.OS === 'ios' ? 35+'%' : 20+'%'};
  margin-left: 20px;
  font-size: 32px;
  font-weight: bold;
  color: #FFF
`;

export const ListLinks = styled.FlatList`
  
`;

export const ContainerEmty = styled.View`
  margin-top: 16%;
  align-items: center;
`;

export const WarnigText = styled.Text`
  font-size: 18px;
  color: #FFF;
`;

export const Icon = styled.Text`
  font-size: 50px;
`