import SearchSVG from "assets/icons/search";
import React, { FunctionComponent, useState } from "react";
import { Platform, StyleSheet, TextInput, View } from "react-native";
import dimensions from "styles/dimensions";
import { ISearchInput } from "types/components";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: dimensions.radiusCircle,
    flexDirection: "row",
    padding: Platform.OS === "android" ? 2 : dimensions.margin,
    paddingLeft: dimensions.margin,
  },
  input: {
    marginLeft: dimensions.marginEight,
  },
});

const SearchInput: FunctionComponent<ISearchInput> = ({
  colors,
  onChangeText,
  value,
  ...props
}) => {
  const [search, setSearch] = useState(value);
  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundPill }]}
      testID="container-input"
    >
      <SearchSVG color={colors.iconSearch} colorClass={colors.primary} />
      <TextInput
        style={[styles.input, { color: colors.text }]}
        selectionColor={colors.selectionColor}
        placeholderTextColor={colors.placeholderTextColor}
        underlineColorAndroid="transparent"
        cursorColor={colors.primary}
        autoCapitalize="none"
        testID="search-input"
        value={search}
        onChangeText={(text) => {
          setSearch(text);
          if (onChangeText) onChangeText(text);
        }}
        {...props}
      />
    </View>
  );
};

export default SearchInput;
