import Pill from "components/pill/pill";
import React, { FunctionComponent } from "react";
import { ListRenderItem, FlatList, StyleSheet, View } from "react-native";
import dimensions from "styles/dimensions";
import { ICarouselPillProps } from "types/components";

const styles = StyleSheet.create({
  content: {
    marginTop: dimensions.margin,
  },
  marginR12: {
    marginRight: dimensions.marginTwelve,
  },
  marginR16: {
    marginRight: dimensions.margin,
  },
});

const CarouselPill: FunctionComponent<ICarouselPillProps> = ({
  colors,
  onPress = () => undefined,
  searchCategory,
  categories,
}) => {
  const renderItem: ListRenderItem<string> = ({ item }) => {
    return (
      <View key={item} style={styles.marginR12}>
        <Pill
          colors={colors}
          title={item}
          onPress={onPress}
          isFocused={searchCategory === item}
        />
      </View>
    );
  };

  return (
    <View style={styles.content} testID="container-carousel">
      <FlatList
        testID="flatlist-carousel"
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default CarouselPill;
