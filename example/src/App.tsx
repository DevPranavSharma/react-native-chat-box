import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { ChatBox } from 'react-native-chat-box';

export default function App() {
  const [messages, setMessages] = React.useState([
    { text: 'Hey', user: false, id: '123' },
    { text: 'Hey! How are you', user: true, id: '124' },
  ]);
  return (
    <View style={styles.container}>
      <ChatBox
        name={'Pranav Sharma'}
        messages={messages}
        onSend={(message) => setMessages([...messages, message])}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
