import { supabase } from "services/supabase/supabase";

interface LoginUserProps {
  employeeId: string;
  password: string;
}

export class Authentication {
  loginUser = async (props: LoginUserProps) => {
    // DATA
    const { employeeId, password } = props;

    // DB OPERATION
    const { data, error } = await supabase.auth.signInWithPassword({
      email: employeeId,
      password,
    });
  };
}
