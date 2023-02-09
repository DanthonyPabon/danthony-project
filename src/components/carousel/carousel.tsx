import MovieItem from "components/item/movieItem";
import React, { FunctionComponent } from "react";
import {
  ListRenderItem,
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import dimensions from "styles/dimensions";
import { IMovies } from "types/api";
import { ICarouselProps } from "types/components";

const styles = StyleSheet.create({
  content: {
    marginTop: dimensions.margin,
  },
  marginR16: {
    marginRight: dimensions.margin,
  },
});

const Carousel: FunctionComponent<ICarouselProps> = ({
  movies,
  colors,
  onPress,
}) => {
  const renderItem: ListRenderItem<IMovies> = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => onPress(item)}
        style={styles.marginR16}
        testID="press-item"
      >
        <MovieItem colors={colors} urlImage={item.image} title={item.title} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.content} testID="container-carousel">
      <FlatList
        testID="flatlist-carousel"
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default Carousel;
