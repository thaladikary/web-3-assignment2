import LoginForm from "../login_components/LoginForm";
import LoginImage from "../login_components/LoginImage";

//The Login component has two other components called LoginImage and LoginForm   
const Login = () => {
  return (
    <div className="flex flex-row">
      <LoginImage />
      <LoginForm />
    </div>
  );
};

export default Login;
