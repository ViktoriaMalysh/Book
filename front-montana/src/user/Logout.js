import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_USER } from "../redux/types";

export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state);

  useEffect(() => {
    LogoutFunk();
  }, []);

  function LogoutFunk() {
    localStorage.removeItem('token');
    dispatch({ type: CLEAR_USER });
    // dispatch(alert("Logout success!"));
    setTimeout(() => {
      navigate("/sign_in");
    }, 1400);
  }
  return null;
}
