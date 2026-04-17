import { Stack } from "expo-router";
import { i18n } from "../utils/mylocalisation";

export default function RootLayout() {
  let hometitle = i18n.t("home");
  let abouttitle = i18n.t("about");
  return <Stack>
    <Stack.Screen
      name="index"
      options={{
        title: hometitle,
      }}
    />
    <Stack.Screen
      name="about"
      options={{
        title: abouttitle,
      }}
    />
  </Stack>;
}
