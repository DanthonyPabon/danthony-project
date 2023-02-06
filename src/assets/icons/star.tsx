import * as React from "react";
import Svg, { G, Path, SvgProps } from "react-native-svg";

const StarSVG = ({ height = 18, width = 18 }: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
      <G fill="none" fillRule="evenodd">
        <Path d="M-3-3h24v24H-3z" />
        <Path
          d="m9 14.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L6.19 5.63l-4.83.41C.48 6.11.12 7.21.79 7.79l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08L9 14.27Z"
          fill="#f7cc31"
        />
      </G>
    </Svg>
  );
};

export default StarSVG;
