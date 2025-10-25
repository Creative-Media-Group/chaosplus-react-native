import { i18n } from "@/utils/mylocalisation";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  let hometitle = i18n.t("home");
  let abouttitle = i18n.t("about");
  return <Tabs>
    <Tabs.Screen
      name="index"
      options={{
        title: hometitle,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tabs.Screen
      name="about"
      options={{
        title: abouttitle,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="information" color={color} size={size} />
        ),
      }}
    />
    <Tabs.Screen
      name="(tabs)"
      options={{
        title: abouttitle,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="information" color={color} size={size} />
        ),
      }}
    />
  </Tabs>;
}
