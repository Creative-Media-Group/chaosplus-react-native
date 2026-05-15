import { Link } from "expo-router";
import { Image, ScrollView, Text, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { mystyles } from "../styles/styles";

export default function MediaInfoPage() {
  const colorSheme = useColorScheme();
  const style = mystyles(colorSheme);
  return (
    <SafeAreaView>
      <ScrollView style={style.infopage}>
        <Text style={style.infopagetext}>Repository: </Text>
        <Link
          href={
            "https://github.com/Creative-Media-Group/chaosplus-react-native"
          }
          style={style.link}
        >
          Chaos+
        </Link>
      </ScrollView>
      <Image></Image>
    </SafeAreaView>
  );
}
