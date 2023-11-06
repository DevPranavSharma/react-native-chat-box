import React from 'react';
import {ColorValue, TextStyle, View, ViewStyle} from 'react-native';
import Header from '../Header';
import ChatInput, {ChatInputProps} from '../ChatInput';
import ChatList, {ChatListProps} from '../ChatList';
import {TMessage} from '../../types';

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
    <View style={{height: '100%'}}>
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
