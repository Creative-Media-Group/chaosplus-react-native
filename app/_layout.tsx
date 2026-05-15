import { DarkTheme, DefaultTheme, ThemeProvider, useTheme } from "@react-navigation/native";
import { Icon, Label } from "expo-router";
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
          <Label>{hometitle}
          </Label>
          <Icon sf={"house"} md="home" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="about">
          <Label>
            {abouttitle}
          </Label>
          <Icon sf={"info"} md="info" />
        </NativeTabs.Trigger>
      </NativeTabs>
    </ThemeProvider>
  );
}
