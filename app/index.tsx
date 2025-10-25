import { mystyles } from "@/styles/styles";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    const data = [
        {
            id: '1',
            title: "Test"
        },
        {
            id: '1',
            title: "Test"
        }, {
            id: '1',
            title: "Test"
        }, {
            id: '1',
            title: "Test"
        }, {
            id: '1',
            title: "Test"
        }, {
            id: '1',
            title: "Test"
        }, {
            id: '1',
            title: "Test"
        }, {
            id: '1',
            title: "Test"
        }, {
            id: '1',
            title: "Test"
        }, {
            id: '1',
            title: "Test"
        }, {
            id: '1',
            title: "Test"
        }, {
            id: '1',
            title: "Test"
        }, {
            id: '1',
            title: "Test"
        }, {
            id: '1',
            title: "Test"
        }, {
            id: '1',
            title: "Test"
        }, {
            id: '1',
            title: "Test"
        }, {
            id: '1',
            title: "Test"
        }, {
            id: '1',
            title: "Test"
        }, {
            id: '1',
            title: "Test"
        }, {
            id: '1',
            title: "Test"
        }, {
            id: '1',
            title: "Test"
        },
    ];
    // const testcard = <Card img_src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Logo_CCC.svg/640px-Logo_CCC.svg.png"} text="hello" />
    return (
        <SafeAreaView
            style={style.homeview}
        >
            <FlatList
                data={data}
                renderItem={({ item }) => <Text
                    style={style.heading}>{item.title}
                </Text>}
                keyExtractor={item => item.id} />
        </SafeAreaView>
    );
}
const style = mystyles();
