import React, { type ReactElement, useState } from 'react';
import {
  View,
  TextInput,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  type TextInputProps,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import styles from './styles';
import { type TMessage } from '../../types';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export type ChatInputProps = {
  onSend: (value: TMessage) => void;
  textInputProps?: TextInputProps;
  textInputStyle?: TextStyle;
  sendBtnStyle?: ViewStyle;
  CustomSend?: ReactElement;
};

const ChatInput: React.FC<ChatInputProps> = ({
  onSend,
  textInputProps,
  textInputStyle,
  sendBtnStyle,
  CustomSend,
}) => {
  const [text, setText] = useState('');

  const onPressSend = () => {
    if (onSend && text) onSend({ text: text, user: true, id: uuidv4() });
    setText('');
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={57}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.inputContainer}>
        <TextInput
          value={text}
          onChangeText={(textVal) => setText(textVal)}
          placeholder="Type your message here"
          multiline={true}
          numberOfLines={10}
          style={[styles.input, textInputStyle]}
          {...textInputProps}
        />
        <Pressable onPress={onPressSend} style={[styles.sendBtn, sendBtnStyle]}>
          {CustomSend ? (
            CustomSend
          ) : (
            <Text style={styles.sendBtnTxt}>Send</Text>
          )}
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};
export default ChatInput;
