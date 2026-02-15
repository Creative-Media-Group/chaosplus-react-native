import { Image } from "expo-image";
import { ImageSourcePropType, Text, TouchableOpacity } from "react-native";

interface CardProbs {
    onPress: () => void;
    img_src: ImageSourcePropType,
    text: string
}
export default function Card({ img_src, text }: CardProbs) {
    return (
        <TouchableOpacity style={{
            width: 16 * 15,
            height: 9 * 15,
            backgroundColor: "red",
            borderRadius: 20
        }}>
            <Image source={img_src} />
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}