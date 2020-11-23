/**
 * This file contains metric values that are global to the application.
 */

// Examples of metrics you can define:
export const tiny = 5;
export const small = tiny * 2; // 10
export const normal = tiny * 3; // 15
export const medium = normal * 2; // 30
export const hitSlop = 40;
/**
 * Base metric = 8
 */
export const baseMetric = 8;
/**
 * Base metric = 12
 */
export const largeMetric = 12;
/**
 * Base radius = 14
 */
export const baseRadius = 14;

/**
 * Header height = 52
 */
export const headerHeight = 52;
/**
 * Loader animationDuration = 500
 */
export const loaderAnimationDuration = 500;
/**
 * Loader loaderTimeout = 500
 */
export const loaderTimeout = 500;

export default {
  topPadding: {
    paddingTop: normal,
  },
  bottomPadding: {
    paddingBottom: normal,
  },
  topSmallPadding: {
    paddingTop: small,
  },
  bottomSmallPadding: {
    paddingBottom: small,
  },
  bottomMargin: {
    marginBottom: normal,
  },
  mediumBottomMargin: {
    marginBottom: medium,
  },

  tinyVerticalMargin: {
    marginVertical: tiny,
  },
  smallVerticalMargin: {
    marginVertical: small,
  },
  verticalMargin: {
    marginVertical: normal,
  },
  mediumVerticalMargin: {
    marginVertical: medium,
  },

  tinyHorizontalMargin: {
    marginHorizontal: tiny,
  },
  smallHorizontalMargin: {
    marginHorizontal: small,
  },
  horizontalMargin: {
    marginHorizontal: normal,
  },
  mediumHorizontalMargin: {
    marginHorizontal: medium,
  },

  tinyHorizontalPadding: {
    paddingHorizontal: tiny,
  },
  smallHorizontalPadding: {
    paddingHorizontal: small,
  },
  horizontalPadding: {
    paddingHorizontal: normal,
  },
  mediumHorizontalPadding: {
    paddingHorizontal: medium,
  },

  tinyVerticalPadding: {
    paddingVertical: tiny,
  },
  smallVerticalPadding: {
    paddingVertical: small,
  },
  verticalPadding: {
    paddingVertical: normal,
  },
  mediumVerticalPadding: {
    paddingVertical: medium,
  },
};
