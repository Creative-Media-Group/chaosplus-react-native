import { StyleSheet } from "react-native";
export function mystyles() {
    return StyleSheet.create({
        heading: { fontSize: 50, margin: 5 },
        infopage: {
            alignContent: "center", // alignItems: "center",
            alignSelf: "center",
            width: "100%",
            height: "100%",
        },
        link: {
            color: "blue",
            fontSize: 20,
        },
        infopagetext: {},
        homeview: {
            flex: 1,
            // justifyContent: "center",
            // alignItems: "center",
            width: "100%"
        }
    })
}