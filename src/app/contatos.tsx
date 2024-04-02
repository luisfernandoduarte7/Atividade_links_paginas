import { StatusBar } from 'expo-status-bar';
import { Text, View,Image} from 'react-native';
import { styles } from '../css/indexStyle';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Pagina contatos!</Text>
      <Image style ={styles.imagens}
      source={require('../../assets/napoleao.jpg')}
      />
      
      <Link style={styles.btn} href={"/contato"}>inicio</Link>
      <Link style={styles.btn} href={"/sobre"}>Sobre</Link>
    <StatusBar style="auto" />
    </View>
  );
}