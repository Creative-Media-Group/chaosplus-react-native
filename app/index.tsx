import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from "react";
import { ScrollView, Text, useColorScheme, View } from "react-native";
import { mystyles } from '../styles/styles';

interface ConferenceList {
    acronym: string
    title: string
}
export default function Index() {
    const colorSheme = useColorScheme()
    const style = mystyles(colorSheme);
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
        <View style={style.homeview}>
            <ScrollView >
                {conferences.map((conference) => (
                    <Text style={style.heading} key={conference.title}>{conference.title}</Text>
                    //<Link href={"/videoview"} key={conference.acronym}>Hello</Link>
                ))}
            </ScrollView>
            <StatusBar style='auto' />
        </View>
    );
}
