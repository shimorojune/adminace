/** @jsxImportSource @emotion/react */
import {
  AppBar,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { changeLanguage } from "i18next";
import { AppState, updateAppLanguage } from "store/appSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { useTranslatedString } from "utils/hooks/useTranslatedString";
import styles from "./Header.styles";

export const Header = () => {
  // HOOKS
  const dispatch = useAppDispatch();

  // STATE
  const appLanguage = useAppSelector((state) => state.app.language);

  // DRAW
  return (
    <AppBar
      position="static"
      color="transparent"
      style={{
        zIndex: 100,
      }}
    >
      <div css={styles.container.style}>
        <span css={styles.container.logoSpan.style}>adminace</span>
        <div css={styles.container.actionsContainer.style}>
          <div
            css={
              styles.container.actionsContainer.languageSelectorContainer.style
            }
          >
            <FormControl fullWidth variant="outlined">
              <InputLabel id="language-select">
                {useTranslatedString({ i8nKey: "I18N_LANGUAGE" })}
              </InputLabel>
              <Select
                labelId="language-select"
                id="language-select-id"
                value={appLanguage}
                label={useTranslatedString({ i8nKey: "I18N_LANGUAGE" })}
                size="small"
                onChange={(e) => {
                  dispatch(
                    updateAppLanguage(e.target.value as AppState["language"])
                  );
                  changeLanguage(e.target.value);
                }}
              >
                <MenuItem value={"en" as AppState["language"]}>
                  English
                </MenuItem>
                <MenuItem value={"hi" as AppState["language"]}>Hindi</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </AppBar>
  );
};
