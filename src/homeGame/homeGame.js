import { View, StyleSheet, Image } from "react-native";

export default function HomeGame(){
    return(
        <View style={styles.navbar}>
            <Image source={require('../assets/bola.png')} style={styles.box} />
            <Image source={require('../assets/controle.png')} style={styles.box} />
            <Image source={require('../assets/loja.png')} style={styles.box} />
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'red'
    },
    box: {
        width: 60,
        height: 60
    }
});