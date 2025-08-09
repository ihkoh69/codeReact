import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, loginPostAsync } from "../../slices/loginSlice";
import { Navigate, useNavigate } from "react-router-dom";
import useCustomLogin from "../../hooks/useCustomLogin";

const initState = {
  email: "",
  pw: "",
};

const LoginComponent = () => {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

  const [loginParam, setLoginParam] = useState({ ...initState });
  const { doLogin, moveToPath } = useCustomLogin();

  const handleChange = (e) => {
    loginParam[e.target.name] = e.target.value;
    setLoginParam({ ...loginParam });
  };

  const handleClickLogin = (e) => {
    e.preventDefault();

    //dispatch(login(loginParam));

    // dispatch(loginPostAsync(loginParam))
    //   .unwrap()
    //   .then((data) => {
    //     console.log("after unwrap....");
    //     console.log(data);

    //     if (data.error) {
    //       alert("이메일과 패스워드를 다시 확인하세요");
    //     } else {
    //       alert("로그인 성공");
    //       navigate({ pathname: `/` }, { replace: true });
    //     }
    //   });
    // console.log("Login clicked", loginParam);

    doLogin(loginParam).then((data) => {
      console.log(data);

      if (data.error) {
        alert("이메일과 패스워드를 다시 확인하세요 ");
      } else {
        alert("로그인 성공");
        moveToPath("/");
      }
    });
  };

  //     console.log("Login clicked", loginParam);
  //   };

  //   const handleClickLogin = async (e) => {
  //     e.preventDefault();
  //     //dispatch(login(loginParam));

  //     try {
  //       const data = await dispatch(loginPostAsync(loginParam)).unwrap();
  //       console.log(data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  return (
    <div className="border-2 border-sky-200 mt-10 m-2 p-4">
      <div className="flex justify-center">
        <div className="text-4xl m-4 p-4 font-extrabold text-blue-500">
          LoginComponent
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-full p-3 text-left font-bold">Email</div>
          <input
            className="w-full p-3 rounded-r border border-solid border-neutral-500 shadow-md"
            name="email"
            type={"text"}
            value={loginParam.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-full p-3 text-left font-bold">Password</div>
          <input
            className="w-full p-3 rounded-r border border-solid border-neutral-500 shadow-md"
            name="pw"
            type={"password"}
            value={loginParam.pw}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full justify-center">
          <div className="w-2/5 p-6 flex justify-center font-bold">
            <button
              className="rounded p-4 w-36 bg-blue-500 text-xl text-white"
              onClick={handleClickLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
