import { Image, ImageSourcePropType, Text, TouchableOpacity } from "react-native";

export default function Card(img_src: ImageSourcePropType, text: string) {
    return (
        <TouchableOpacity>
            <Image source={img_src} />
            <Text>${text}</Text>
        </TouchableOpacity>
    )
}