import { Interpolation, Theme } from "@emotion/react";

export type CreateEmotionStyles = {
  [key: string]: Interpolation<Theme>
};
