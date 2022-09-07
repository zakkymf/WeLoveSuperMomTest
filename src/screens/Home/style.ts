import {StyleSheet} from 'react-native';
import {Colors} from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  content: {
    padding: 10,
    elevation: 3,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  input: {
    borderBottomWidth: 0.5,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: Colors.black,
  },
  result: {
    fontSize: 12,
    color: Colors.black,
    marginVertical: 5,
  },
});

export default styles;
