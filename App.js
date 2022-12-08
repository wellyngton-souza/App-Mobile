import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Pou from './src/pou/pou';
import NavBar from './src/nav-bar/nav-bar';
import HomeGame from './src/homeGame/homeGame';

export default function App() {
  return (
    <View style={styles.body}>
      <StatusBar style="auto" />
      <View style={styles.boxes}>
        <NavBar />
          <Pou />
        <HomeGame />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: 'yellow'
  },
  boxes: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
});