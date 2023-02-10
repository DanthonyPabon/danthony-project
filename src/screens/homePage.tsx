import { useTheme } from "@react-navigation/native";
import Carousel from "components/carousel/carousel";
import Container from "components/container";
import SearchInput from "components/input/searchInput";
import Pill from "components/pill/pill";
import Option from "components/text/option";
import SubTitle from "components/text/subTitle";
import Title from "components/text/title";
import useRequestHandler from "hook/useRequestHandler";
import useTranslate from "hook/useTranslate";
import { darkModeProvider } from "providers/state-provider";
import { setThemeDark } from "providers/themeControl/actions";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Switch, View } from "react-native";
import dataFavoritesMovies from "services/data-test-two.json";
import dataMovies from "services/data-test.json";
import MoviesApi from "services/movies";
import dimensions from "styles/dimensions";
import { IColor } from "styles/theme";
import { IMovies } from "types/api";

const styles = StyleSheet.create({
  contentMovies: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: dimensions.generalBottom,
  },
  directionRow: {
    flexDirection: "row",
  },
  marginB12: {
    marginBottom: dimensions.marginTwelve,
  },
  marginB24: {
    marginBottom: dimensions.marginBo,
  },
  marginR12: {
    marginRight: dimensions.marginTwelve,
  },
});

const HomePage = () => {
  const { t, keys } = useTranslate();
  const { colors } = useTheme() as unknown as IColor;
  const { onResponse } = useRequestHandler();
  const globalStore = useContext(darkModeProvider);
  const { darkModeStateDispatch, darkModeState } = globalStore;
  const [searchValue, setSearchValue] = useState<string>("");
  const [movies, setMovies] = useState<IMovies[]>(dataMovies);
  const [favorites] = useState<IMovies[]>(dataFavoritesMovies);

  const getMoviesFromApi = async () => {
    const { data, error } = await onResponse(MoviesApi.getAllMovies());
    if (!error) {
      setMovies(data);
    }
  };

  const goToMovieDetail = (item: IMovies) => {
    console.log("What movie?", item);
    // navigation.navigate(RouteNames.DetailPage, item);
  };

  useEffect(() => {
    getMoviesFromApi();
  });

  return (
    <Container colors={colors} withScroll>
      <View style={styles.marginB24}>
        <Title colors={colors} txt={t(keys.welcome)} />
        <SubTitle colors={colors} txt={t(keys.welcomeMessage)} />
      </View>
      <View style={styles.marginB24}>
        <SearchInput
          onChangeText={setSearchValue}
          placeholder={t(keys.searchMovie) || ""}
          value={searchValue}
          colors={colors}
        />
      </View>
      <View style={styles.marginB24}>
        <View style={styles.marginB12}>
          <Title colors={colors} txt={t(keys.categories)} />
        </View>
        <View style={styles.directionRow}>
          <View style={styles.marginR12}>
            <Pill colors={colors} title="Action" />
          </View>
          <View style={styles.marginR12}>
            <Pill colors={colors} title="Comedy" />
          </View>
          <View style={styles.marginR12}>
            <Pill colors={colors} title="Romance" />
          </View>
        </View>
      </View>
      <View style={styles.marginB24}>
        <View style={styles.contentMovies}>
          <Title colors={colors} txt={t(keys.latestMovie)} />
          <Option colors={colors} txt={t(keys.viewAll)} />
        </View>
        <Carousel colors={colors} movies={movies} onPress={goToMovieDetail} />
      </View>
      <View style={styles.marginB24}>
        <View style={styles.contentMovies}>
          <Title colors={colors} txt={t(keys.favoriteMovie)} />
          <Option colors={colors} txt={t(keys.viewAll)} />
        </View>
        <Carousel
          colors={colors}
          movies={favorites}
          onPress={goToMovieDetail}
        />
      </View>
      <Switch
        value={darkModeState.darkMode}
        onValueChange={(value) => darkModeStateDispatch(setThemeDark(value))}
      />
    </Container>
  );
};

export default HomePage;
