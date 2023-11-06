# react-native-chat-box

a fully customisable chat component

## Installation

```sh
npm i @devpranavsharma/react-native-chat-box
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

## Props

- **`name`** _(String)_ - Name of the person to show in the header
- **`messages`** _(TMessage[])_ - Messages to display e.g [{ text: 'Hey', user: false, id: '123' }]
- **`onSend`** _(Function)_ - Callback when sending a message
- **`headerColor`** _(ColorValue)_ - value for header background color 
- **`headerTextColor`** _(ColorValue)_ - value for header text color
- **`headerTextStyles`** _(Object)_ - styles for header text
- **`headerStyles`** _(Object)_ - styles for header text
- **`chatBubbleColor`** _(ColorValue)_ - chat bubble color
- **`chatBubbleTextColor`** _(Object)_ - color for bubble text
- **`chatBubbleStyle`** _(Object)_ - styles for chat bubble view
- **`chatBubbleTextStyle`** _(Object)_ - styles for chat bubble text
- **`listScrollProps`** _(Object)_ - props for the FlatList
- **`listScrollStyle`** _(Object)_ - styles for the FlatList
- **`textInputProps`** _(Object)_ - props for the text input
- **`textInputStyle`** _(Object)_ - styles for the text input
- **`sendBtnStyle`** _(Object)_ - styles for the send Button Container
- **`CustomSend`** _(Component)_ - Custom component to replace Send button


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
