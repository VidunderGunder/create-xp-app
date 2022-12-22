import { useRouter } from "solito/router";
import Button from "../components/design/Button";
import Gap from "../components/design/Gap";
import Text from "../components/design/Text";
import View from "../components/design/View";

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
