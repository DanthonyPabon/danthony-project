import SubTitle from "components/text/subTitle";
import React from "react";
import { StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";
import dimensions from "styles/dimensions";
import { IMovieItem } from "types/components";

const styles = StyleSheet.create({
  content: {
    width: 130,
  },
  image: {
    borderRadius: dimensions.margin,
    height: 200,
    width: 130,
  },
});

const renderImage = (urlImage: string) => {
  return (
    <FastImage
      style={styles.image}
      source={{ uri: urlImage }}
      resizeMode={FastImage.resizeMode.stretch}
      testID="fast-image"
    />
  );
};

const MovieItem = ({ urlImage, title, colors }: IMovieItem) => {
  return (
    <View style={styles.content}>
      {renderImage(urlImage)}
      <View style={{ marginTop: dimensions.generalTop }}>
        <SubTitle color={colors.textSubTitle}>{title}</SubTitle>
      </View>
    </View>
  );
};

export default MovieItem;
