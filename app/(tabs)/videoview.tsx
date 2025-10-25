import { useEvent } from "expo";
import { VideoView, useVideoPlayer } from "expo-video";
import { StyleSheet } from "react-native";
const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function MyVideoView() {
  const player = useVideoPlayer(videoSource, (player) => {
    player.play();
  });
  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing
  });
  console.log(isPlaying);
  return (
    <VideoView
      style={styles.video}
      player={player}
      fullscreenOptions={{ enable: true }}
      allowsPictureInPicture
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  video: {
    width: "100%",
    height: "100%",
  },
  controlsContainer: {
    padding: 10,
  },
});
