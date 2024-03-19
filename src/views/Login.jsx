import LoginForm from "../login_components/LoginForm";
import LoginImage from "../login_components/LoginImage";

const Login = () => {
  return (
    <div className="flex flex-row">
      <LoginImage />
      <LoginForm />
    </div>
  );
};

export default Login;
