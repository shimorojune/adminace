import { css, SerializedStyles } from "@emotion/react";

// For text data that needs to be translated
export interface I8nAndMessageProps {
  i8nKey?: string;
  i8nValues?: { [key: string]: string };
  message?: string;
}

// For component style definitions

type Style = {
  style: SerializedStyles;
  [key: string]:
    | Omit<SerializedStyles, "map" | "name" | "next" | "styles">
    | Style;
};

export type ComponentStyle = Record<string, Style>;
