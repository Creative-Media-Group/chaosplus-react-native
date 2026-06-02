import { Link } from "expo-router";
import { Image, ScrollView, Text, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "../styles/styles";

export default function MediaInfoPage() {
  const colorSheme = useColorScheme();
  const styles = useStyles();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.infopage}>
        <Text style={styles.infopagetext}>Repository: </Text>
        <Link
          href={
            "https://github.com/Creative-Media-Group/chaosplus-react-native"
          }
          style={styles.link}
        >
          Chaos+
        </Link>
      </ScrollView>
      <Image></Image>
    </SafeAreaView>
  );
}
