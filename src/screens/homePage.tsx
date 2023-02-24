import { useTheme } from "@react-navigation/native";
import Carousel from "components/carousel/carousel";
import CarouselPill from "components/carousel/carouselPill";
import Container from "components/container";
import SearchInput from "components/input/searchInput";
import SubTitle from "components/text/subTitle";
import TextOption from "components/text/textOption";
import Title from "components/text/title";
import useRequestHandler from "hook/useRequestHandler";
import useTranslate from "hook/useTranslate";
import { darkModeProvider } from "providers/state-provider";
import { setThemeDark } from "providers/themeControl/actions";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Switch, View } from "react-native";
import dataCategoriesMovies from "services/data-category.json";
// import dataFavoritesMovies from "services/data-test-two.json";
import dataMovies from "services/data-test.json";
import MoviesApi from "services/movies";
import dimensions from "styles/dimensions";
import { IColor } from "styles/theme";
import { IMovies } from "types/api";
import FunctionUtils from "utils/functionUtils";
import RouteNames from "utils/navigation";

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
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HomePage = ({ navigation }: any) => {
  const { t, keys } = useTranslate();
  const { colors } = useTheme() as unknown as IColor;
  const { onResponse } = useRequestHandler();
  const globalStore = useContext(darkModeProvider);
  const { darkModeStateDispatch, darkModeState } = globalStore;
  const [movies, setMovies] = useState<IMovies[]>(dataMovies);

  const [searchValue, setSearchValue] = useState<string>("");
  const [searchCategory, setSearchCategory] = useState<string>("");
  const [filteredData, setFilteredData] = useState<IMovies[]>(movies);

  const [favorites] = useState<IMovies[]>([]);

  const getMoviesFromApi = async () => {
    const { data, error } = await onResponse(MoviesApi.getAllMovies());
    if (!error) {
      setMovies(data);
    }
  };

  useEffect(() => {
    getMoviesFromApi();
  }, []);

  const goToMovieDetail = (item: IMovies) => {
    navigation.navigate(RouteNames.DetailPage, item);
  };

  const searchFilterCategory = (searchedText: string) => {
    if (searchedText) {
      const newData = FunctionUtils.filterArrayBy(
        movies,
        searchedText,
        "genre"
      );
      setFilteredData(newData);
      setSearchCategory(searchedText);
    } else {
      setFilteredData(movies);
      setSearchCategory(searchedText);
    }
  };

  const searchFilterTitle = (searchedText: string) => {
    if (searchedText) {
      const newData = FunctionUtils.filterArrayBy(
        movies,
        searchedText,
        "title"
      );
      setFilteredData(newData);
      setSearchValue(searchedText);
    } else {
      setFilteredData(movies);
      setSearchValue(searchedText);
    }
  };

  return (
    <Container colors={colors} withScroll>
      <View style={styles.marginB24}>
        <Title color={colors.textTitle}>{t(keys.welcome)}</Title>
        <SubTitle color={colors.textSubTitle}>
          {t(keys.welcomeMessage)}
        </SubTitle>
      </View>
      <View style={styles.marginB24}>
        <SearchInput
          onChangeText={searchFilterTitle}
          placeholder={t(keys.searchMovie) || ""}
          value={searchValue}
          colors={colors}
        />
      </View>
      <View style={styles.marginB24}>
        <View style={styles.marginB12}>
          <Title color={colors.textTitle}>{t(keys.categories)}</Title>
        </View>
        <View style={styles.directionRow}>
          <CarouselPill
            colors={colors}
            categories={dataCategoriesMovies.sort()}
            onPress={searchFilterCategory}
            searchCategory={searchCategory}
          />
        </View>
      </View>
      <View style={styles.marginB24}>
        <View style={styles.contentMovies}>
          <Title color={colors.textTitle}>{t(keys.latestMovie)}</Title>
          <TextOption color={colors.textOption}>{t(keys.viewAll)}</TextOption>
        </View>
        <Carousel
          colors={colors}
          items={filteredData}
          onPress={goToMovieDetail}
        />
      </View>
      <View style={styles.marginB24}>
        <View style={styles.contentMovies}>
          <Title color={colors.textTitle}>{t(keys.favoriteMovie)}</Title>
          <TextOption color={colors.textOption}>{t(keys.viewAll)}</TextOption>
        </View>
        <Carousel colors={colors} items={favorites} onPress={goToMovieDetail} />
      </View>
      <Switch
        value={darkModeState.darkMode}
        onValueChange={(value) => darkModeStateDispatch(setThemeDark(value))}
      />
    </Container>
  );
};

export default HomePage;
