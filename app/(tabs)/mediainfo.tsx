import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from "react";
import { Image, ImageSourcePropType, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function MediaInfoContent(img_src: ImageSourcePropType | undefined, text: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined) {
  return <ScrollView>
    <Image source={img_src} />
    <Text>{text}</Text>
  </ScrollView>
}

export default function MediaInfoPage() {
  return (
    <SafeAreaView>
      <MediaInfoContent />
    </SafeAreaView>
  );
}
