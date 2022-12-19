import Text from "../components/design/Text";
import View from "../components/design/View";
import Three from "../components/examples/Three";
import MainLayout from "../components/layouts/MainLayout";

export default function HomeScreen() {
  return (
    <MainLayout sx={{}}>
      <Text
        sx={{
          fontSize: 42,
          fontWeight: "bold",
          textAlign: "center",
          paddingTop: 3,
          paddingBottom: 4,
        }}
      >
        Create{" "}
        <Text
          sx={(theme) => ({
            color: theme.colors.$primary,
          })}
        >
          XP
        </Text>{" "}
        App
      </Text>
      <View
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Three />
      </View>
    </MainLayout>
  );
}
