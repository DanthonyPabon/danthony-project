import { useTheme } from "@react-navigation/native";
import StarSVG from "assets/icons/star";
import ButtonWithIcon from "components/buttons/buttonWithIcon";
import CarouselPill from "components/carousel/carouselPill";
import Container from "components/container";
import HeaderMovie from "components/header/headerMovie";
import SubTitle from "components/text/subTitle";
import Title from "components/text/title";
import React from "react";
import { StyleSheet, View } from "react-native";
import dimensions from "styles/dimensions";
import { typography } from "styles/fonts";
import { IColor } from "styles/theme";
import { IMovies } from "types/api";

const styles = StyleSheet.create({
  content: { paddingHorizontal: 0 },
  contentInfo: {
    flexDirection: "row",
  },
  contentRating: {
    alignItems: "center",
    flexDirection: "row",
  },
  contentTitle: { marginTop: dimensions.margin },
  spaceTop: { marginTop: dimensions.margin },
  spaceTopSpecial: { marginTop: dimensions.marginSix },
  txtRating: { marginLeft: 8, ...typography.label },
  txtTitle: { fontSize: 28 },
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DetailPage = ({ route, navigation }: any) => {
  const movieInfo: IMovies = route.params;
  const { colors } = useTheme() as unknown as IColor;

  const onSubmit = () => {
    navigation.goBack();
  };

  return (
    <Container
      colors={colors}
      styles={styles.content}
      withScroll
      withoutSafeAreaTop
    >
      <HeaderMovie
        gradientBackground={colors.gradientBackground}
        urlImage={movieInfo.image}
      />
      <ButtonWithIcon onPress={onSubmit} />
      <View style={{ paddingHorizontal: dimensions.margin }}>
        <View style={[styles.contentInfo, styles.spaceTop]}>
          <View style={styles.contentRating}>
            <StarSVG />
            <SubTitle color={colors.textRating} style={styles.txtRating}>
              {movieInfo.rating}
            </SubTitle>
            <SubTitle
              color={colors.textGrey}
              style={styles.txtRating}
            >{`| ${movieInfo.year.toString()}`}</SubTitle>
          </View>
        </View>
        <View style={styles.contentTitle}>
          <Title color={colors.textTitle} style={styles.txtTitle}>
            {movieInfo.title}
          </Title>
          <View style={styles.spaceTopSpecial}>
            <SubTitle
              color={colors.textGrey}
            >{`Director: ${movieInfo.director.join(", ")}`}</SubTitle>
          </View>
        </View>
        <CarouselPill colors={colors} categories={movieInfo.genre.sort()} />
        <View style={styles.spaceTop}>
          <Title
            color={colors.textTitle}
            style={{ marginBottom: dimensions.marginTwelve }}
          >
            Synopsis
          </Title>
          <SubTitle color={colors.textSubTitle}>
            {movieInfo.description}
          </SubTitle>
        </View>
        <View style={styles.spaceTop}>
          <SubTitle
            color={colors.textSubTitle}
          >{`Writers: ${movieInfo.writers.join(", ")}`}</SubTitle>
        </View>
      </View>
    </Container>
  );
};

export default DetailPage;
