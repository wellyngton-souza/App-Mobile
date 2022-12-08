import { Image, Text, View, StyleSheet } from "react-native";

export default function Moeda(){
    return(
        <View style={styles.flex}>
            <Image
                style={styles.box} 
                source={require('../assets/moeda.png')}
            />
            <Text>0</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        width: 50,
        height: 50
    },
    flex: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
});