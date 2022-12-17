import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { styles } from "./Styles";

export default function SignInScreen() {
  const { signIn, setSession, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });

      await setSession(completeSignIn.createdSessionId);
    } catch (err) {
      //LOG IT
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          style={styles.textInput}
          placeholder="Email..."
          placeholderTextColor="#000"
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          value={password}
          style={styles.textInput}
          placeholder="Password..."
          placeholderTextColor="#000"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.primaryButton} onPress={onSignInPress}>
        <Text style={styles.primaryButtonText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}
