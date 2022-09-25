import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LogoIcon } from "../../assets/icons/LogoIcon";
import { Button } from "../../components/atoms/Button";
import {
  AreaButtonFooter,
  AreaContents,
  AreaExplanation,
  AreaKnowMore,
  Container,
  Footer,
} from "./styles";
import { Text } from "../../components/atoms/Text";
import { Dimensions } from "react-native";
import { ArrowLearnMoreIcon } from "../../assets/icons/ArrowLearnMoreIcon";
import { Switch } from "../../components/atoms/form/Switch";
import { useForm } from "react-hook-form";

export function Login() {
  const windowHeight = Dimensions.get("window").height + 12;
  const screenWidth = Dimensions.get("screen").width;

  const { control } = useForm();

  return (
    <Container>
      <SafeAreaView>
        <AreaContents style={{ height: windowHeight }}>
          <LogoIcon style={{ marginTop: 30, marginBottom: 120 }} />
          <AreaExplanation>
            <Text numberOfLines={4} size={24}>
              Queremos deixar seu roxinho ainda mais protegido. Por isso, sempre
              vamos pedir uma senha para acessar o aplicativo.
            </Text>
            <AreaKnowMore>
              <Text color="#6e6f74" style={{ width: 170 }}>
                Saiba mais sobre essa iniciativa.
              </Text>
              <ArrowLearnMoreIcon style={{ marginLeft: 10 }} />
            </AreaKnowMore>
          </AreaExplanation>
          <AreaButtonFooter>
            <Button fontSize={16}>Usar senha do celular</Button>
            <Text
              color="#78777c"
              numberOfLines={2}
              textAlign="center"
              style={{ marginTop: 12, marginBottom: 24 }}
            >
              Essa senha é a mesma forma de validação que você usa para
              desbloquear seu celular.
            </Text>
            <Footer style={{ width: screenWidth, marginLeft: -25 }}>
              <Text numberOfLines={2} style={{ width: "80%" }}>
                Pular esta explicação da próxima vez que eu abrir o alicativo do
                Nubank.
              </Text>
              <Switch name="skip_splanation" control={control} />
            </Footer>
          </AreaButtonFooter>
        </AreaContents>
      </SafeAreaView>
    </Container>
  );
}
