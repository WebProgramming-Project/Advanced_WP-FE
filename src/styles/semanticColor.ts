import { openColors } from "./openColor";

export const semanticColors = {
  primary: openColors.yellow[7],
  "primary-focus": openColors.yellow[8],
  "primary-content": openColors.white,
  "primary-inActive": openColors.yellow[4],
  secondary: "#3d1002",
  error: openColors.red[7],
  "error-focus": openColors.red[8],
  "error-content": openColors.white,
  "error-inActive": openColors.red[2],
} as const;
