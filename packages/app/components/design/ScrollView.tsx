import { forwardRef } from "react";
import { styled } from "dripsy";
import type { ScrollView as _ScrollViewType } from "react-native";
import { MotiScrollView } from "moti";
import { ComponentPropsWithoutRef } from "react";

const DripsyMotiScrollView = styled(MotiScrollView)();

export type ScrollViewProps = {
  // Custom props here
} & ComponentPropsWithoutRef<typeof DripsyMotiScrollView>;
export type ScrollViewType = _ScrollViewType;

export default forwardRef<ScrollViewType, ScrollViewProps>(function View(
  { children, sx, ...props },
  ref,
) {
  return (
    <DripsyMotiScrollView
      ref={ref}
      sx={(theme) => ({
        // Custom styles here
        ...(typeof sx === "function" ? sx(theme) : sx),
      })}
      {...props}
    >
      {children}
    </DripsyMotiScrollView>
  );
});
