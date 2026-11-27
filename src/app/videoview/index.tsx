import { FieldGroup, Host } from "@expo/ui";
import { useEvent } from "expo";
import { Stack } from "expo-router";
import { VideoView, useVideoPlayer } from "expo-video";
import { Text } from "react-native";
import { useStyles } from "../../styles/styles";

const videoSource = "https://download.blender.org/demo/movies/ToS/tears_of_steel_720p.mov";

export default function MyVideoView() {
  const styles = useStyles();
  const player = useVideoPlayer(videoSource, (player) => {
    // player.play();
  });
  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing
  });
  console.log("Status: " + isPlaying);
  return (
    <>
      <Stack.Title>Hello</Stack.Title>
      <VideoView
        style={styles.video}
        player={player}
        fullscreenOptions={{ enable: true, keepFullscreenOnPiPStop: "always" }}
        allowsPictureInPicture={true} />
      <Host style={{ flex: 1 }}>
        <FieldGroup>
          <FieldGroup.Section title="Title">
            <Text style={styles.heading}>Hello</Text>
          </FieldGroup.Section>
          <FieldGroup.Section title="Content">
            <Text style={styles.infopagetext}>Hello</Text>
          </FieldGroup.Section>
        </FieldGroup>
      </Host>
    </>
  );
}
