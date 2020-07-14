import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCookie } from "../redux/cookie/cookieActions";

function HooksCookieContainer() {
  const numOfCookies = useSelector((state) => state.cookie.numOfCookies);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cookies: {numOfCookies}</h2>
      <button onClick={() => dispatch(buyCookie())}>Buy cookie</button>
    </div>
  );
}

export default HooksCookieContainer;
