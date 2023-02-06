import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IIconSearch } from "types/components";

const SearchSVG = ({
  height = 16,
  width = 16,
  color,
  colorClass,
}: IIconSearch) => {
  return (
    <Svg width={width} height={height}>
      <Path
        d="m15.727 14.594-3.383-3.38a.886.886 0 0 0-1.25 0 5.592 5.592 0 0 1-6.801.759 5.6 5.6 0 0 1-2.45-6.395 5.602 5.602 0 0 1 5.571-3.98A5.602 5.602 0 0 1 12.61 8.64a.802.802 0 0 0 1.551.414A7.212 7.212 0 0 0 1.152 3.254a7.216 7.216 0 0 0 1.184 9.281 7.216 7.216 0 0 0 9.355.3l2.903 2.9a.785.785 0 0 0 .566.234c.211 0 .414-.082.567-.235a.798.798 0 0 0 0-1.14Zm0 0"
        fill={color}
      />
      <Path
        d="M9.602 9.602a.79.79 0 0 0-.961-.09 2.724 2.724 0 0 1-2.774.054.773.773 0 0 0-.918.106l-.047.047a.758.758 0 0 0-.234.64.78.78 0 0 0 .367.579 4.334 4.334 0 0 0 4.48-.09.77.77 0 0 0 .133-1.196Zm0 0"
        fill={colorClass}
      />
    </Svg>
  );
};

export default SearchSVG;
