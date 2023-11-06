import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  inputContainer: {
    backgroundColor: '#DDD',
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 14,
    minHeight: 20,
    maxHeight: 100,
    flex: 3,
  },
  sendBtn: {
    borderRadius: 20,
    padding: 5,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  sendBtnTxt: {
    borderRadius: 20,
    padding: 10,
    color: 'white',
    fontWeight: '500',
  },
});
