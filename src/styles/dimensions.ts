import { deviceSizeScale } from "utils/devices";

export const dimensions = {
  generalBottom: 10,
  generalTop: 10,
  margin: 16 * deviceSizeScale,
  marginBo: 22,
  marginBottomSpace: 32,
  marginEight: 8,
  marginMain: 48,
  marginSix: 6,
  marginTopSpace: 32,
  marginTwelve: 12,
  radius: 4,
  radiusBig: 10,
  radiusCircle: 50,
  simpleHeaderPadding: 125,
} as const;

export default dimensions;
