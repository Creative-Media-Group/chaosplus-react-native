import { Link } from "expo-router";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";

export default function MediaInfoPage() {
    return <SafeAreaView >
        <ScrollView style={style.infopage}>
            <Text>Repository: </Text>
            <Link href={"https://google.com"} style={style.link}>Hello</Link>
        </ScrollView>
        <Image>
        </Image>
    </SafeAreaView>
}
const style = StyleSheet.create({
    infopage: {
        alignContent: "center", // alignItems: "center",
        alignSelf: "center",
        width: "100%",
        height: "100%",
    }, link: { color: "blue", fontSize: 20 }
})