import { mystyles } from "@/styles/styles";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

    // const testcard = <Card img_src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Logo_CCC.svg/640px-Logo_CCC.svg.png"} text="hello" />
    return (
        <SafeAreaView
            style={style.homeview}
        >
            <Text style={style.heading}>Hello</Text>
        </SafeAreaView>
    );
}
const style = mystyles();
