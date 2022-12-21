import { forwardRef, useEffect, useState } from "react";
import { useDripsyTheme, styled } from "dripsy";
import { motify, AnimatePresence } from "moti";
import View, { ViewProps, ViewType } from "./View";
import { Easing } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

const MotiDripsyGradient = styled(motify(LinearGradient)())();

export type GradientProps = {
  // Custom props here
  gradients?: string[][];
  duration?: number;
} & Omit<ViewProps, "colors" | "children">;
export type GradientType = ViewType;

const initial = false;

export default forwardRef<GradientType, GradientProps>(
  /**
   * Has a bug where web will abruptly change the gradient color, most likely caused by keys not being properly tracked/ordered.
   */
  function Gradient(
    {
      duration = 10000,
      sx,
      gradients = [
        [`#ff472b`, `#5132c0`],
        [`#5132c0`, `#8f2df0`],
        [`#8f2df0`, `#3860ee`],
        [`#430fff`, `#ff0a3f`],
        [`#8f2df0`, `#5132c0`],
        [`#2752eb`, `#8f2df0`],
      ],
      ...props
    },
    ref,
  ) {
    const { theme } = useDripsyTheme();
    const [index, setIndex] = useState(0);

    const toggle = () => {
      setIndex((currentIndex) => (currentIndex + 1) % gradients.length);
    };

    useEffect(() => {
      if (gradients.length <= 1) return;
      const interval = setInterval(toggle, duration);
      return () => clearInterval(interval);
    }, []);

    const gradient = gradients[index] ?? theme.linearGradients.peach;

    return (
      <View
        ref={ref}
        {...props}
        sx={{
          ...(typeof sx === "function" ? sx(theme) : sx),
          zIndex: -1,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        {/* Fallback to unanimated gradient */}
        <MotiDripsyGradient
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          colors={gradients[0] ?? theme.linearGradients.peach}
        >
          <AnimatePresence initial={initial}>
            {/* View Wrapper necessary for Web to animate at all */}
            <View
              key={gradients.length > 1 ? gradient.join("-") : "static"}
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: "timing",
                duration,
                easing: Easing.out(Easing.bounce),
              }}
              exitTransition={{
                type: "timing",
                duration,
                easing: Easing.in(Easing.bounce),
              }}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <MotiDripsyGradient
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
                colors={gradient}
              />
            </View>
          </AnimatePresence>
        </MotiDripsyGradient>
      </View>
    );
  },
);
