import styled from 'styled-components/native'
import {Platform, PLatform} from 'react-native'

export const ContainerLogo = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${Platform.OS === 'iso' ? 35+'px' : 15+'px'};
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;

export const ContainerContent = styled.View`
  margin-top: ${Platform.OS === 'iso' ? 25+'%' : 15+'%'};
`;

export const Title = styled.Text`
  font-size: 35px;
  color: #FFF;
  font-weight: bold;
  text-align: center;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  color: #FFF;
  text-align: center;
  padding-bottom: 10%;
`;

export const ContainerInput = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
  border-radius: 8px;
  margin: 15px 0;
  padding-left: 15px;
  padding-right: 15px;
`;

export const BoxIcon = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  width: 11%;
  height: 50px;
  background-color: rgba(255,255,255, 0.15);
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const Input = styled.TextInput`
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 50px;
  padding: 10px;
  background-color: rgba(255,255,255, 0.15);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  font-size: 18px;
  color: #FFF
`;

export const ButtonLink = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 45px;
  background-color: #FFF;
  margin: 0 15px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const ButtonLinkText = styled.Text`
  font-size: 18px;
`;
