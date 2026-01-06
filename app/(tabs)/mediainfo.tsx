import { Image, ImageSourcePropType, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function MediaInfoContent(img_src: ImageSourcePropType | undefined, text: string) {
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
