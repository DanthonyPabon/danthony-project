import { Dimensions, PixelRatio, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

export const deviceSize = { height, width };

export const deviceSizeScale = width / 375 < 1 ? 1 : width / 375;

/* If is an ios device */
export const isIOS: boolean = Platform.OS === "ios";

/* If is an android device */
export const isAndroid: boolean = Platform.OS === "android";

export const isSmall: boolean = width < 370;
// Width 320 568

/* Get pixel density */
export const pixelDensity = PixelRatio.get();
// Small screen is an 4" android or an iPhone SE or similar
export const isSmallScreen = pixelDensity < (isIOS ? 2.1 : 2);

/* Get font scale */
export const FontScale = PixelRatio.getFontScale();
