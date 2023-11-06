# react-native-chat-box

a fully customisable chat component

## Installation

```sh
npm install react-native-chat-box
```

## Usage

```js
import { ChatBox } from 'react-native-chat-box';

// ...

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
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
