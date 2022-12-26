import { forwardRef } from "react";
import View, { ViewProps, ViewType } from "./View";

export type CardType = ViewType;
export type CardProps = {
  // Custom props here
} & ViewProps;

export default forwardRef<CardType, CardProps>(function Card(
  { children, sx, ...props },
  ref,
) {
  return (
    <View
      ref={ref}
      {...props}
      sx={(theme) => ({
        borderRadius: 10,
        backgroundColor: "$white",
        overflow: "hidden",
        ...(typeof sx === "function" ? sx(theme) : sx),
      })}
    >
      {children}
    </View>
  );
});
