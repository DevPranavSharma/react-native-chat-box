import * as React from 'react';

import { SafeAreaView } from 'react-native';
import { ChatBox } from 'react-native-chat-box';

export default function App() {
  const [messages, setMessages] = React.useState([
    { text: 'Hey', user: false, id: '123' },
    { text: 'Hey! How are you', user: true, id: '124' },
  ]);
  return (
    <SafeAreaView>
      <ChatBox
        name={'Pranav Sharma'}
        messages={messages}
        onSend={(message) => setMessages([...messages, message])}
      />
    </SafeAreaView>
  );
}
