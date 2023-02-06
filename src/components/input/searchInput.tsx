import SearchSVG from "assets/icons/search";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import dimensions from "styles/dimensions";
import { ISearchInput } from "types/components";

const styles = StyleSheet.create({
  container: {
    borderRadius: dimensions.radiusCircle,
    flexDirection: "row",
    padding: dimensions.margin,
  },
  input: {
    marginLeft: dimensions.marginEight,
  },
});

const SearchInput = ({ colors, ...props }: ISearchInput) => {
  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundPill }]}
    >
      <SearchSVG color={colors.iconSearch} colorClass={colors.primary} />
      <TextInput
        style={[styles.input, { color: colors.text }]}
        selectionColor={colors.selectionColor}
        placeholderTextColor={colors.placeholderTextColor}
        cursorColor={colors.primary}
        autoCapitalize="none"
        {...props}
      />
    </View>
  );
};

export default SearchInput;
