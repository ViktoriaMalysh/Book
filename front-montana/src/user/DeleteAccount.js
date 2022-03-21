import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector, connect } from "react-redux";
import { DELETE } from "../redux/types";
import { fetchDeleteAccount } from "../redux/actionUsers";
// import { Alert } from "../components/Alert";

function DeleteAccount() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(fetchDeleteAccount(token));
    if (store.users.delete) {
      setTimeout(() => {
        navigate("/sign_up");
        dispatch({ type: DELETE, payload: false });
      }, 1400);
    }else navigate('/')
  }, [store.users.delete]);

  return null;
  // return <div>{store.users.text && <Alert text={store.users.text} />}</div>;
}

const mapDispatchToProps = {
  fetchDeleteAccount,
};

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccount);
