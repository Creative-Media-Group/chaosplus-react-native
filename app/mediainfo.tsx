import { Image, ImageSourcePropType, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface MediaInfoContentProbs {
  img_src: ImageSourcePropType,
  text: string
}
function MediaInfoContent({ img_src, text }: MediaInfoContentProbs) {
  return <ScrollView>
    <Image source={img_src} />
    <Text>{text}</Text>
  </ScrollView>
}

export default function MediaInfoPage() {
  return (
    <SafeAreaView>
      <MediaInfoContent img_src={{ uri: "asset:assets/Images/Icon" }} text="hello" />
    </SafeAreaView>
  );
}
