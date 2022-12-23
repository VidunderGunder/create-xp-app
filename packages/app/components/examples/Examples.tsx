import { forwardRef } from "react";
import { useRouter } from "solito/router";
import Button from "../design/Button";
import Gap from "../design/Gap";
import View, { ViewProps, ViewType } from "../design/View";
import ThreeJS from "./ThreeJS";
import TRPC from "./TRPC";

type ExamplesType = ViewType;
type ExamplesProps = {
  // Custom props here
} & ViewProps;

const gap = 40;

export default forwardRef<ExamplesType, ExamplesProps>(function Examples(
  { children, sx, ...props },
  ref,
) {
  const router = useRouter();
  return (
    <View
      ref={ref}
      {...props}
      sx={(theme) => ({
        // Custom styles here
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        ...(typeof sx === "function" ? sx(theme) : sx),
      })}
    >
      <ThreeJS />
      <Gap size={gap} />
      <TRPC />
      <Gap size={gap} />
      <Button
        onPress={() => {
          router.push("/example");
        }}
      >
        Go to example route
      </Button>
      {children}
    </View>
  );
});
