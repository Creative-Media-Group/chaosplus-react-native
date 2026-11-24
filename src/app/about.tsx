import { ScrollView, Text } from "@expo/ui";
import { Link, Stack } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useStyles } from "../styles/styles";

export default function MediaInfoPage() {
  const insets = useSafeAreaInsets();
  const styles = useStyles();
  return (
    <>
    <Stack.Title large>Hello</Stack.Title>
      <ScrollView style={{}}>
        <Text style={{}}>Repository: </Text>
        <Link
          href={
            "https://github.com/Creative-Media-Group/chaosplus-react-native"
          }
          style={styles.link}
        >
          Chaos+
        </Link>
      </ScrollView>
    </>
    //<Image></Image>
  )

}
