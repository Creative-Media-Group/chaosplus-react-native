import { useEvent } from "expo";
import { VideoView, useVideoPlayer } from "expo-video";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "../styles/styles";

const videoSource = "https://download.blender.org/demo/movies/ToS/tearsofsteel_4k.mov";

export default function MyVideoView() {
  const styles = useStyles();
  const player = useVideoPlayer(videoSource, (player) => {
    player.play();
  });
  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing
  });
  console.log("Status: " + isPlaying);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <VideoView
        style={styles.video}
        player={player}
        fullscreenOptions={{ enable: true, keepFullscreenOnPiPStop: "always" }}

        allowsPictureInPicture={true}
      />
      <Text style={styles.heading}>Hello</Text>
    </SafeAreaView>
  );
}
