import { SerializedStyles } from "@emotion/react";

// For text data that needs to be translated
export interface I8nAndMessageProps {
  i8nKey?: string;
  i8nValues?: { [key: string]: string };
  message?: string;
}

// For component style definitions

type Style = {
  style: SerializedStyles;
  children?: {
    [key: string]: Style;
  };
};

export type ComponentStyle = Record<string, Style>;
