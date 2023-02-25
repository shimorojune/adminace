import { getAuth, signInWithEmailAndPassword, AuthError } from "firebase/auth";
import { showErrorSnackbar } from "utils/functions";

interface SignInUserProps {
  username: string;
  password: string;
}

export class AuthFirebaseService {
  static signInUser = async (props: SignInUserProps) => {
    // PROPS
    const { username, password } = props;

    // VARIABLES
    const auth = getAuth();
    const emailAddress = `${username}@adminace.com`;

    // DB OPERATION
    try {
      await signInWithEmailAndPassword(auth, emailAddress, password);
    } catch (error) {
      showErrorSnackbar({ message: (error as AuthError).message });
    }
  };
}
