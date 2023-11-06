import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  listContainer: {
    padding: 10,
    flex: 1,
  },
  scrollViewContent: {
    marginBottom: 100,
    paddingBottom: 10,
  },
  chatBubble: {
    borderRadius: 20,
    padding: 2,
    maxWidth: '75%',
    margin: 5,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#CCC',
  },
  nonUserBubble: {
    backgroundColor: 'purple',
    alignSelf: 'flex-start',
  },
  chatTxt: {
    borderRadius: 20,
    padding: 10,
    fontWeight: '500',
  },
  userText: {
    color: '#000',
  },
  nonUserText: {
    color: 'white',
  },
});
