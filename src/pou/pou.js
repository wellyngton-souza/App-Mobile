import { Image, StyleSheet } from "react-native";

export default function Pou() {
    return (
        <Image 
        style={styles.box} 
        source={require('../assets/pou.png')} 
        />
    );
}

const styles = StyleSheet.create({
    box: {
        width: '100%'
    }
});