import { Button } from "@/components/ui/Button";
import React, { useState } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";

const Login = () => {
  const { toast } = useToast(); // ✅ destructurá la función "toast"
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const loginHandler = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials:true
        }
      );
      console.log(res);
      if (res.data.success) {
        alert(res.data.message)
      }
    } catch (error) {
      alert(error.response.data.message)
    }
  };

  return (
    <div>
      <Input
        name="email"
        value={user.email}
        onChange={changeHandler}
        type="text"
        placeholder="Email"
      />
      <Input
        name="password"
        value={user.password}
        onChange={changeHandler}
        type="password"
        placeholder="Password"
      />
      <Button onClick={loginHandler}>Login</Button>
    </div>
  );
};

export default Login;
