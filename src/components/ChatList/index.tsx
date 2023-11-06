import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  type ViewStyle,
  type ColorValue,
  type TextStyle,
  type ScrollViewProps,
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

type ScrollViewRefType = React.RefObject<ScrollView> | null;

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
  const scrollRef: ScrollViewRefType = useRef<ScrollView>(null);

  useEffect(() => {
    setTimeout(() => {
      if (scrollRef?.current) scrollRef?.current.scrollToEnd();
    }, 500);
  }, [messages]);

  return (
    <ScrollView
      ref={scrollRef}
      contentContainerStyle={styles.scrollViewContent}
      style={[styles.listContainer, listScrollStyle]}
      {...listScrollProps}
    >
      {!!messages &&
        messages?.map((message) => (
          <ChatBubble
            chatBubbleColor={chatBubbleColor}
            chatBubbleStyle={chatBubbleStyle}
            chatBubbleTextStyle={chatBubbleTextStyle}
            chatBubbleTextColor={chatBubbleTextColor}
            key={message.id}
            message={message}
          />
        ))}
    </ScrollView>
  );
};

export default ChatList;
