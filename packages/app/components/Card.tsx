import { ComponentPropsWithoutRef, forwardRef } from "react";
import { MotiView } from "moti";
import { styled } from "dripsy";

const DripsyMotiView = styled(MotiView)();

type Props = {
  // Custom props here
} & ComponentPropsWithoutRef<typeof DripsyMotiView>;

export default forwardRef<typeof DripsyMotiView, Props>(function Card(
  { children, sx, ...props },
  ref,
) {
  return (
    <DripsyMotiView
      ref={ref}
      sx={{
        borderRadius: 10,
        backgroundColor: "$white",
        overflow: "hidden",
        ...sx,
      }}
      {...props}
    >
      {children}
    </DripsyMotiView>
  );
});
