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
            id: '2',
            title: "Test"
        }, {
            id: '3',
            title: "Test"
        }, {
            id: '4',
            title: "Test"
        }, {
            id: '5',
            title: "Test"
        }, {
            id: '6',
            title: "Test"
        }, {
            id: '7',
            title: "Test"
        }, {
            id: '8',
            title: "Test"
        }, {
            id: '9',
            title: "Test"
        }, {
            id: '10',
            title: "Test"
        }, {
            id: '11',
            title: "Test"
        }, {
            id: '12',
            title: "Test"
        }, {
            id: '13',
            title: "Test"
        }, {
            id: '14',
            title: "Test"
        }, {
            id: '15',
            title: "Test"
        }, {
            id: '16',
            title: "Test"
        }, {
            id: '17',
            title: "Test"
        }, {
            id: '18',
            title: "Test"
        }, {
            id: '19',
            title: "Test"
        }, {
            id: '20',
            title: "Test"
        }, {
            id: '21',
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
                    style={style.heading, { fontFamily: "VCROCDFaux" }}>{item.title}
                </Text>}
                keyExtractor={item => item.id} />
        </SafeAreaView>
    );
}
const style = mystyles();
