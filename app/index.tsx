import Card from "@/components/Card";
import { mystyles } from "@/styles/styles";
import { FlatList, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    const data = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: "Test"
        }];
    const testcard = <Card
        img_src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Logo_CCC.svg/640px-Logo_CCC.svg.png"}
        text="hello" />
    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <ScrollView id="scrollEvents" style={{ width: "100%" }}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <Text
                        style={style.heading}>{item.title}
                    </Text>}
                    keyExtractor={item => item.id} />

            </ScrollView>
        </SafeAreaView>
    );
}
const style = mystyles();
