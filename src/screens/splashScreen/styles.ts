import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styled from 'styled-components';

interface StyleProps {
  isSelected?: number;
  number?: number;
  size?: number;
}

export const Container = styled(LinearGradient).attrs({
  colors: ['#7D7D4C', '#244a4a'],
})`
  display: flex;
  width: 100%;
  align-items: center;
  height: 100%;
`;

export const Title = styled(Text)<StyleProps>`
  font-family: Foco-Bold;
  font-weight: 900;
  color: white;
  font-size: ${props => props.size}px;
  text-align: center;
`;

export const ListTitle = styled(Text)<StyleProps>`
  font-family: Foco-Bold;
  min-width: 99%;
  padding: 2%;
  font-weight: 900;
  color: white;
  font-size: ${props => props.size}px;
  text-align: center;
`;

export const Header = styled(View)`
  margin: 5%;
  display: flex;
  width: 100%;
  align-items: center;
`;

export const Selector = styled(View)`
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
`;

export const Touchable = styled(TouchableOpacity)<StyleProps>`
  background-color: ${props =>
    props.isSelected === props.number ? '#878787' : '#2E2E2E'};
  border-radius: 360px;
  min-width: 10%;
`;

export const ListItem = styled(TouchableOpacity)<StyleProps>`
  background-color: ${props =>
    props.isSelected === props.number ? '#878787' : '#2E2E2E'};
  border-radius: 360px;
  min-width: 10%;
`;

export const FlatListContainer = styled(View)`
  margin-top: 5%;
  min-width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled(View)`
  background-color: aliceblue;
  min-height: 50%;
  border-radius: 15px;
  padding: 5%;
  justify-content: center;
  align-items: center;
`;
