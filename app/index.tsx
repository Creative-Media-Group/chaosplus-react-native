import { mystyles } from "@/styles/styles";
import { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ConferenceList {
    title: string


}
export default function Index() {
    const [conferences, setConferences] = useState<ConferenceList[]>([]);
    useEffect(() => { getConferences() }, []);
    async function getConferences() {
        try {
            const url = "https://api.media.ccc.de/public/conferences";
            const response = await fetch(url);
            const data = await response.json()
            setConferences(data.results["conferences"])
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <SafeAreaView
            style={style.homeview}
        >
            <ScrollView>
                {conferences.map((connference) => (
                    <Text key={connference.title}>{connference.title}</Text>
                ))}
            </ScrollView>
        </SafeAreaView> //<Text style={style.heading}>Hello</Text>
    );
}
const style = mystyles();
