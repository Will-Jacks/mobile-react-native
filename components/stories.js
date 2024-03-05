import { View, Image, StyleSheet, Text, ScrollView } from "react-native";

import reactNativeLogo from "../image/img-react.png";

export default function Stories() {

    return (
        <ScrollView style={styles.container} horizontal={true}>
            <Image source={reactNativeLogo} style={styles.image} />
            {/* <Text>React Native</Text> */}
            <Image source={reactNativeLogo} style={styles.image} />
            {/* <Text>React Native</Text> */}
            <Image source={reactNativeLogo} style={styles.image} />
            {/* <Text>React Native</Text> */}
            <Image source={reactNativeLogo} style={styles.image} />
            {/* <Text>React Native</Text> */}
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
            <Image source={reactNativeLogo} style={styles.image} />
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'red',
        width: "100%",
        minHeight: 80
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 75,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "gray",
        marginLeft: 5
    }
})