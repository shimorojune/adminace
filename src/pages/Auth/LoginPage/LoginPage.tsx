import { Button, TextField } from "@mui/material";
import logo from "assets/logo/logo-compressed.png";
import { HookTextField } from "components/Fields/HookTextField/HookTextField";
import { FormProvider, useForm } from "react-hook-form";
import { AuthFirebaseService } from "services/firebase/auth";
import { useTranslatedString } from "utils/hooks/useTranslatedString";
import styles from "./LoginPage.styles";

interface LoginForm {
  username: string;
  password: string;
}

export const LoginPage = () => {
  // HOOKS
  const formInstance = useForm<LoginForm>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // HANDLERS
  const onSubmitHandler = (values: LoginForm) => {
    AuthFirebaseService.signInUser({
      username: values.username,
      password: values.password,
    });
  };

  // DRAW
  return (
    <FormProvider {...formInstance}>
      <div css={styles.container.style}>
        <div css={styles.container.contentContainer.style}>
          <div css={styles.container.contentContainer.logoContainer.style}>
            <img src={logo} width="100%" height="auto" />
          </div>
          <form onSubmit={formInstance.handleSubmit(onSubmitHandler)}>
            <div css={styles.container.contentContainer.formContainer.style}>
              <HookTextField<LoginForm>
                name="username"
                fullWidth
                label={useTranslatedString({ i8nKey: "I18N_USER_NAME" })}
              />
              <HookTextField<LoginForm>
                name="password"
                fullWidth
                label={useTranslatedString({ i8nKey: "I18N_PASSWORD" })}
              />
              <Button size="large" type="submit" variant="contained">
                {useTranslatedString({ i8nKey: "I18N_LOG_IN" })}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </FormProvider>
  );
};
