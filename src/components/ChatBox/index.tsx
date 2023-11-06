import React from 'react';
import {
  type ColorValue,
  type TextStyle,
  View,
  type ViewStyle,
} from 'react-native';
import Header from '../Header';
import ChatInput, { type ChatInputProps } from '../ChatInput';
import ChatList, { type ChatListProps } from '../ChatList';
import { type TMessage } from '../../types';

export type ChatBoxProps = {
  name: string;
  onSend: (value: Partial<TMessage>) => void;
  messages: TMessage[];
  headerColor?: ColorValue;
  headerTextColor?: ColorValue;
  headerStyles?: ViewStyle;
  headerTextStyles?: TextStyle;
} & ChatListProps &
  ChatInputProps;

export const ChatBox: React.FC<ChatBoxProps> = ({
  name,
  onSend,
  messages,
  headerColor,
  headerTextColor,
  headerStyles,
  headerTextStyles,
  chatBubbleColor,
  chatBubbleTextColor,
  chatBubbleStyle,
  chatBubbleTextStyle,
  listScrollProps,
  listScrollStyle,
  textInputProps,
  textInputStyle,
  sendBtnStyle,
  CustomSend,
}) => {
  return (
    <View style={{ height: '100%' }}>
      <Header
        headerColor={headerColor}
        username={name}
        textColor={headerTextColor}
        headerStyles={headerStyles}
        headerTextStyles={headerTextStyles}
      />
      <ChatList
        chatBubbleColor={chatBubbleColor}
        chatBubbleTextColor={chatBubbleTextColor}
        chatBubbleStyle={chatBubbleStyle}
        chatBubbleTextStyle={chatBubbleTextStyle}
        messages={messages}
        listScrollProps={listScrollProps}
        listScrollStyle={listScrollStyle}
      />
      <ChatInput
        onSend={onSend}
        textInputProps={textInputProps}
        textInputStyle={textInputStyle}
        sendBtnStyle={sendBtnStyle}
        CustomSend={CustomSend}
      />
    </View>
  );
};
