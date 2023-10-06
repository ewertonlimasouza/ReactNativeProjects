import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    paddingHorizontal: 20, 
  },
  titulo: {
    fontSize: 20,
    color: 'blue',
    marginTop: 15,
    textAlign: 'center', 
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 20,
    textAlign: 'center', 
  },
  contador: {
    fontSize: 25,
    textAlign: 'center', 
    color: 'black',
  },
});

export { styles };
