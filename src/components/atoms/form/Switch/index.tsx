import React from "react";
import { Control, Controller } from "react-hook-form";
import { Switch as SwitchBase } from "react-native-switch";

interface SwitchProps {
  name: string;
  control: Control<any>;
}

export function Switch({ name, control }: SwitchProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <SwitchBase
          backgroundActive={"#BA7De4"}
          backgroundInactive={"#B7BaC3"}
          renderActiveText={false}
          renderInActiveText={false}
          circleBorderActiveColor={"#830ad1"}
          circleBorderInactiveColor={"#FAFAFA"}
          circleSize={20}
          barHeight={14}
        />
      )}
    />
  );
}
