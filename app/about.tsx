import { Image, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";

export default function MediaInfoPage() {
    return <SafeAreaView ><ScrollView style={style.infopage}><Text>Hello</Text></ScrollView><Image></Image></SafeAreaView>
}
const style = StyleSheet.create({
    infopage: {
        alignContent: "center", // alignItems: "center",
        alignSelf: "center",
        width: "100%",
        height: "100%"
    }
})