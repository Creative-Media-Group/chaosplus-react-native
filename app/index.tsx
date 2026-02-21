import { mystyles } from "@/styles/styles";
import { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ConferenceList {
    acronym: string
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
            setConferences(data.conferences)
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <SafeAreaView style={style.homeview}>
            <ScrollView >
                {conferences.map((conference) => (
                    <Text style={style.heading} key={conference.title}>{conference.title}</Text>
                    //<Link href={"/videoview"} key={conference.acronym}>Hello</Link>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}
const style = mystyles();
//    <Link href={"/videoview"} key={conference.acronym}>
//        Hello
//    </Link>
//<FlatList key={conference.title} data={[conference.title]} />