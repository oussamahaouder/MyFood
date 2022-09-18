import { StyleSheet, View ,Text} from 'react-native';



function Login() {
  return (
    <View  style={styles.container}>
   <form>
    <Text style={styles.label}> Email </Text>
    <input name="e-mail" style={styles.input} type="text"/>
    
    <br/>
    <Text style={styles.label}> Password </Text>
       <input name="password" style={styles.input} type="password"/>
   
    <br/>
    <button type='submit' style={styles.button}> Login</button>
   </form>
   </View>
  )
}
const styles = StyleSheet.create({
    label: {
      color: 'white',
      margin: 20,
      marginLeft: 0,
    },
    button: {
      marginTop: 40,
      color: 'white',
      height: 40,
      backgroundColor: '#ec5990',
      borderRadius: 4,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 8,
      backgroundColor: '#0e101c',
    },
    input: {
      backgroundColor: 'white',
      borderColor: 'none',
      height: 40,
      padding: 10,
      borderRadius: 4,
    },
  });
export default Login