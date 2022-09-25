import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AreaButtonsHeader,
  AreaCircleButtonsHeader,
  AreaContents,
  CircleProfile,
  Container,
  Header,
} from "./styles";
import { Text } from "../../components/atoms/Text";
import { Dimensions, StatusBar } from "react-native";
import { UserIcon } from "../../assets/icons/UserIcon";
import { OpenEyeIcon } from "../../assets/icons/OpenEyeIcon";
import { HelpIcon } from "../../assets/icons/HelpIcon";
import { AddUserIcon } from "../../assets/icons/AddUserIcon";

export function Home() {
  const screenWidth = Dimensions.get("screen").width;

  return (
    <Container>
      <StatusBar backgroundColor="#830AD1" />
      <SafeAreaView>
        <Header>
          <AreaCircleButtonsHeader>
            <CircleProfile>
              <UserIcon />
            </CircleProfile>
            <AreaButtonsHeader>
              <OpenEyeIcon style={{ marginRight: 30 }} />
              <HelpIcon style={{ marginRight: 30 }} />
              <AddUserIcon />
            </AreaButtonsHeader>
          </AreaCircleButtonsHeader>
          <Text color="#fff" size={18}>
            Olá, Mathias
          </Text>
        </Header>
        <AreaContents></AreaContents>
      </SafeAreaView>
    </Container>
  );
}
