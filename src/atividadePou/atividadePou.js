import { Text, View, StyleSheet } from "react-native";
import Moeda from "../moeda/moeda";

export default function AtividadePou(){
    return(
        <View style={styles.navbar}>
            <Moeda />
            <Text style={styles.box}>Fome</Text>
            <Text style={styles.box}>Saude</Text>
            <Text style={styles.box}>Felicidade</Text>
            <Text style={styles.box}>Energia</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'red',
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10
    },
    box: {
        padding: 10,
        backgroundColor: 'rgb(18, 255, 15)',
        borderRadius: 2
    }
  });
  