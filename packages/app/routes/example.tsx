import { useRouter } from "solito/router";
import Button from "../components/moti-dripsy/Button";
import Gap from "../components/moti-dripsy/Gap";
import Text from "../components/moti-dripsy/Text";
import View from "../components/moti-dripsy/View";

import MainLayout from "../components/layouts/MainLayout";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <MainLayout>
      <View
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Text>This is an example route</Text>
        <Gap size={20} />
        <Button
          onPress={() => {
            router.push("/");
          }}
        >
          Go Home
        </Button>
      </View>
    </MainLayout>
  );
}
