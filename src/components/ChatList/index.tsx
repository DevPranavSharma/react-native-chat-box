import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  type ViewStyle,
  type ColorValue,
  type TextStyle,
  type ScrollViewProps,
  FlatList,
} from 'react-native';
import styles from './styles';
import { type TMessage } from '../../types';

export type ChatBubbleProps = {
  message: TMessage;
  chatBubbleColor?: ColorValue;
  chatBubbleStyle?: ViewStyle;
  chatBubbleTextStyle?: TextStyle;
  chatBubbleTextColor?: ColorValue;
};
export type ChatListProps = {
  messages: TMessage[];
  listScrollProps?: ScrollViewProps;
  listScrollStyle?: ViewStyle;
} & Omit<ChatBubbleProps, 'message'>;

const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  chatBubbleColor,
  chatBubbleStyle,
  chatBubbleTextColor,
  chatBubbleTextStyle,
}) => {
  const { user, text } = message;

  return (
    <View
      style={[
        styles.chatBubble,
        user ? styles.userBubble : styles.nonUserBubble,
        chatBubbleColor ? { backgroundColor: chatBubbleColor } : undefined,
        chatBubbleStyle,
      ]}
    >
      <Text
        style={[
          styles.chatTxt,
          user ? styles.userText : styles.nonUserText,
          chatBubbleTextColor ? { color: chatBubbleTextColor } : undefined,
          chatBubbleTextStyle,
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

const ChatList: React.FC<ChatListProps> = ({
  messages,
  chatBubbleColor,
  chatBubbleStyle,
  chatBubbleTextStyle,
  chatBubbleTextColor,
  listScrollProps,
  listScrollStyle,
}) => {
  const scrollRef = useRef<FlatList>(null);

  useEffect(() => {
    setTimeout(() => {
      if (scrollRef?.current) scrollRef?.current.scrollToEnd();
    }, 500);
  }, [messages]);
  if (messages)
    return (
      <FlatList
        data={messages}
        ref={scrollRef}
        {...listScrollProps}
        contentContainerStyle={styles.scrollViewContent}
        style={[styles.listContainer, listScrollStyle]}
        renderItem={({ item: message }) => (
          <ChatBubble
            chatBubbleColor={chatBubbleColor}
            chatBubbleStyle={chatBubbleStyle}
            chatBubbleTextStyle={chatBubbleTextStyle}
            chatBubbleTextColor={chatBubbleTextColor}
            key={message.id}
            message={message}
          />
        )}
      />
    );
  return null;
};

export default ChatList;
