import CloseSVG from "assets/icons/close";
import React, { FunctionComponent } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "styles/colors";
import { IButtonWithIcon } from "types/components";

const styles = StyleSheet.create({
  arrowIcon: {
    backgroundColor: Colors.grey40,
    borderRadius: 50,
    height: 40,
    opacity: 0.5,
    position: "absolute",
    width: 40,
  },
  container: {
    alignItems: "center",
    borderRadius: 50,
    height: 40,
    justifyContent: "center",
    left: 15,
    position: "absolute",
    top: 50,
    width: 40,
  },
});

const ButtonWithIcon: FunctionComponent<IButtonWithIcon> = ({
  icon = <CloseSVG />,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.arrowIcon} />
      <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>
    </View>
  );
};

export default ButtonWithIcon;
