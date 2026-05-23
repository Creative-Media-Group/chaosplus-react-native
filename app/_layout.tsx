import { DarkTheme, DefaultTheme, ThemeProvider, useTheme } from "expo-router/react-navigation";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import { useColorScheme } from "react-native";
import { i18n } from "../utils/mylocalisation";

export default function RootLayout() {
  const theme = useTheme();
  let hometitle = i18n.t("home");
  let abouttitle = i18n.t("about");
  const colorSheme = useColorScheme();
  return (
    <ThemeProvider value={colorSheme === "dark" ? DarkTheme : DefaultTheme}>
      <NativeTabs
        tintColor={theme.colors.primary}
        backgroundColor={theme.colors.background} >
        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Label>{hometitle}
          </NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf={"house"} md="home" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="about">
          <NativeTabs.Trigger.Label>
            {abouttitle}
          </NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf={"info"} md="info" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="videoview">
          <NativeTabs.Trigger.Label>
            Video
          </NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf={"video"} md="video_file" />
        </NativeTabs.Trigger>
      </NativeTabs>
    </ThemeProvider>
  );
}
