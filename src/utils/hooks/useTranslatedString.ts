import { useTranslation } from "react-i18next";
import { I8nAndMessageProps } from "types/commonTypes";

export const useTranslatedString = (data: I8nAndMessageProps): string => {
  // HOOKS
  const { t } = useTranslation();

  // VARIABLES
  const labelString =
    (!!data.i8nKey ? t(data.i8nKey, data.i8nValues ?? {}) : data.message) ??
    "Unknown String";

  return labelString;
};
