import {
  View,
  Text,
  type ColorValue,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import React from 'react';
import styles from './styles';

export type HeaderProps = {
  username: string;
  headerColor?: ColorValue;
  textColor?: ColorValue;
  headerStyles?: ViewStyle;
  headerTextStyles?: TextStyle;
};

const Header: React.FC<HeaderProps> = ({
  username,
  headerColor,
  textColor,
  headerStyles,
  headerTextStyles,
}) => {
  return (
    <View
      style={[
        styles.headerContainer,
        headerColor ? { backgroundColor: headerColor } : undefined,
        headerStyles,
      ]}
    >
      <Text
        style={[
          styles.headerTxt,
          textColor ? { color: textColor } : undefined,
          headerTextStyles,
        ]}
      >
        {username}
      </Text>
    </View>
  );
};

export default Header;
