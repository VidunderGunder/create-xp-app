import { forwardRef } from "react";
import View, { ViewProps, ViewType } from "../design/View";
import ThreeJS from "./ThreeJS";
import TRPC from "./TRPC";

type RenameMeType = ViewType;
type RenameMeProps = {
  // Custom props here
} & ViewProps;

export default forwardRef<RenameMeType, RenameMeProps>(function RenameMe(
  { children, sx, ...props },
  ref,
) {
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
      <TRPC />
      {children}
    </View>
  );
});
