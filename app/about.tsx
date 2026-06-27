import { Link } from "expo-router";
import { ScrollView, Text, useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useStyles } from "../styles/styles";

export default function MediaInfoPage() {
  const colorSheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const styles = useStyles();
  return <ScrollView style={[styles.infopage, { paddingTop: insets.top }]}>
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
  //<Image></Image>

}
