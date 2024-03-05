import { Text, View, Image, StyleSheet } from "react-native";
import logoReact from "../image/img-react.png";


export default function Body() {

    return (
        <View>
            <Image source={logoReact} style={style.image} />
        </View>
    )
}

const style = StyleSheet.create({
    image: {
        width: 200,
        height: 200
    }
}
)