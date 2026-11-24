import { Host, ScrollView, Text } from "@expo/ui";
import { Stack, useTheme } from "expo-router";
import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useStyles } from '../../styles/styles';

interface ConferenceList {
    acronym: string
    title: string
}
export default function Index() {
    const style = useStyles();
    const insets = useSafeAreaInsets();
    const theme = useTheme();
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
        <>
            <Stack.Title large>Hello</Stack.Title>
            <Host style={{ flex: 1 }}>
                <ScrollView>
                    {conferences.map((conference) => (
                        <Text style={{}} key={conference.title}>{conference.title}</Text>
                        //<Link href={"/videoview"} key={conference.acronym}>Hello</Link>
                    ))}
                </ScrollView>
            </Host>
        </>
    );
}
