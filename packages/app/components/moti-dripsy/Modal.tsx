import { forwardRef } from "react";
import { AnimatePresence } from "moti";
import Card, { CardProps, CardType } from "./Card";
import Button from "./Button";
import View from "./View";
import Gradient from "./Gradient";
import Gap from "./Gap";

export type ModalProps = {
  visible?: boolean;
  onHide?: () => void;
} & CardProps;
export type ModalType = CardType;

const spacing = 20;

export default forwardRef<ModalType, ModalProps>(function Modal(
  { children, sx, visible = false, onHide, ...props },
  ref,
) {
  // const sxFunc = useSx();
  // const { theme } = useDripsyTheme();
  return (
    <AnimatePresence>
      {visible ? (
        <View
          from={{ opacity: 0 }}
          transition={{ type: "timing", duration: 100 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            // zIndex: 99999,
          }}
        >
          <Card
            ref={ref}
            {...props}
            sx={(theme) => ({
              maxWidth: "100%",
              margin: "auto",
              padding: spacing,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "transparent",
              ...(typeof sx === "function" ? sx(theme) : sx),
            })}
          >
            <View
              sx={{
                position: "absolute",
                zIndex: 1,
                top: 0,
                right: 0,
                marginLeft: "auto",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "transparent",
                  margin: 1,
                }}
                onPress={onHide}
              >
                🅧
              </Button>
            </View>
            <Gradient gradients={[["#00ffffcc", "#10ebc7cc"]]} />
            <Gap size={spacing + 3} />
            {children}
          </Card>
        </View>
      ) : null}
    </AnimatePresence>
  );
});
