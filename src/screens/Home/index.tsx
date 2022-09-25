import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, Text } from "./styles";

export function Home() {
  return (
    <Container>
      <SafeAreaView>
        <Text>Home Screen</Text>
      </SafeAreaView>
    </Container>
  );
}
