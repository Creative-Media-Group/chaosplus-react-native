import { NativeTabs } from "expo-router/unstable-native-tabs";
import { i18n } from "../utils/mylocalisation";

export default function RootLayout() {
  let hometitle = i18n.t("home");
  let abouttitle = i18n.t("about");
  return <NativeTabs>
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
  </NativeTabs>;
}
