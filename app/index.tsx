import { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { useStyles } from '../styles/styles';

interface ConferenceList {
    acronym: string
    title: string
}
export default function Index() {
    const style = useStyles();
    const [conferences, setConferences] = useState<ConferenceList[]>([]);
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
    useEffect(() => { getConferences() }, []);

    return (
        <ScrollView style={style.infopage} contentContainerStyle={{ alignItems: "center" }}>
            {conferences.map((conference) => (
                <Text style={style.heading} key={conference.title}>{conference.title}</Text>
                //<Link href={"/videoview"} key={conference.acronym}>Hello</Link>
            ))}
        </ScrollView>
    );
}
