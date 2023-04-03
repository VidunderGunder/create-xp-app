import { useAuth, useSignIn } from ".";
import Button from "../moti-dripsy/Button";
import View from "../moti-dripsy/View";
import type { ViewProps, ViewType } from "../moti-dripsy/View";
import { forwardRef, useState } from "react";
import TextInput from "../moti-dripsy/TextInput";
import Gap from "../moti-dripsy/Gap";
import { Text } from "react-native";

export type SignInType = ViewType;
export type SignInProps = {
  // Custom props here
  onSuccess?: () => void;
} & ViewProps;

export default forwardRef<SignInType, SignInProps>(function SignIn(
  { sx, onSuccess, ...props },
  ref,
) {
  const { isSignedIn } = useAuth();
  const [isLoading, setIsLoading] = useState(isSignedIn);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signIn, setSession, isLoaded } = useSignIn();

  const onSignInPress = async () => {
    if (!isLoaded) return;

    try {
      console.log("signing in");
      setError("");
      setIsLoading(true);

      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });

      console.log(
        "completeSignIn",
        completeSignIn,
        completeSignIn.createdSessionId,
      );

      await setSession(completeSignIn.createdSessionId);

      setIsLoading(false);
      onSuccess?.();
    } catch (err) {
      console.error(err);
      setError(JSON.stringify(err));
      setIsLoading(false);
    }
  };

  return (
    <View
      ref={ref}
      {...props}
      sx={(theme) => ({
        // Custom styles here
        width: 269,
        ...(typeof sx === "function" ? sx(theme) : sx),
      })}
    >
      <TextInput
        // disable on loading
        editable={!isLoading}
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Email..."
        onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
      />
      <Gap />
      <TextInput
        editable={!isLoading}
        value={password}
        placeholder="Password..."
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <Gap />
      <Text>{error}</Text>
      <Button onPress={onSignInPress} disabled={!isLoaded}>
        Sign in
      </Button>
    </View>
  );
});
