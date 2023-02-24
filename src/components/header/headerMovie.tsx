import React from "react";
import { StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "styles/colors";
import { IHeaderMovie } from "types/components";
import { deviceSize } from "utils/devices";

const sizeImage = deviceSize.width;

const styles = StyleSheet.create({
  boxGradientItem: {
    bottom: 0,
    height: 100,
    position: "absolute",
    width: "100%",
  },
  image: {
    backgroundColor: Colors.black,
    height: sizeImage * 1.4,
    marginTop: 0,
  },
});

const HeaderMovie = ({ urlImage, gradientBackground }: IHeaderMovie) => {
  return (
    <View>
      <FastImage style={styles.image} source={{ uri: urlImage }} />
      <LinearGradient
        colors={gradientBackground}
        style={[styles.boxGradientItem]}
      />
    </View>
  );
};

export default HeaderMovie;
