import { Button, TextField } from "@mui/material";
import logo from "assets/logo/logo-compressed.png";
import { useTranslatedString } from "utils/hooks/useTranslatedString";
import styles from "./LoginPage.styles";

export const LoginPage = () => {
  // DRAW
  return (
    <div css={styles.container.style}>
      <div css={styles.container.contentContainer.style}>
        <div css={styles.container.contentContainer.logoContainer.style}>
          <img src={logo} width="100%" height="auto" />
        </div>
        <div css={styles.container.contentContainer.formContainer.style}>
          <TextField
            fullWidth
            id="filled-basic"
            label={useTranslatedString({ i8nKey: "I18N_USER_NAME" })}
            variant="filled"
          />
          <TextField
            fullWidth
            id="filled-basic"
            label={useTranslatedString({ i8nKey: "I18N_PASSWORD" })}
            type="password"
            variant="filled"
          />
          <Button size="large" variant="contained">
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
};
