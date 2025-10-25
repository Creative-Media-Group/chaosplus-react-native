import { mystyles } from "@/styles/styles";
import { Link } from "expo-router";
import { Image, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MediaInfoPage() {
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
const style = mystyles();
