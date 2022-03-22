import React, { useEffect, useState } from "react";
import { BrowserRouter, useRouteMatch, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import CountryItaly from "./pages/countries/italy";
import CountryTurkey from "./pages/countries/turkey";
import CountryGermany from "./pages/countries/germany";
import CountryFrance from "./pages/countries/france";
import CountryEgypt from "./pages/countries/egypt";
import CountryGreece from "./pages/countries/greece";
import CountrySpain from "./pages/countries/spain";
import SignIn from "./user/SignIn";
import Logout from "./user/Logout";
import SignUp from "./user/SignUp";
import Tickets from "./rooms/HotelTicket";
import Profile from "./settings/Profile";
import DeleteAccount from "./user/DeleteAccount";
import ProfileSettings from "./settings/ProfileSettings";
import FirstPage from "./pages/FirstPage";
import HomePage from "./pages/HomePage";
import Account from "./settings/Account";
import PublicEmail from "./settings/PublicEmail";
import Basket from "./settings/basket/Basket";
// import StripeCheckoutButton from '../src/components/stripe.button.component';


export default function AppNav() {
  const store = useSelector((state) => state);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    if (flag) {
      setTimeout(() => {
        setFlag(false);
      }, 1500);
    }
  }, [flag]);

  if (flag) {
    return <FirstPage />;
  }

  return (
    <BrowserRouter>   
      <Header />
      <Routes>
        <Route path="/country/turkey" element={<CountryTurkey />} />
        <Route path="/country/italy" element={<CountryItaly />} />
        <Route path="/country/france" element={<CountryFrance />} />
        <Route path="/country/egypt" element={<CountryEgypt />} />
        <Route path="/country/greece" element={<CountryGreece />} />
        <Route path="/country/spain" element={<CountrySpain />} />
        <Route path="/country/germany" element={<CountryGermany />} />

        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />  
        <Route path="/logout" element={<Logout />} />
        <Route path="/delete_ccount" element={<DeleteAccount />} />

        <Route path="/settings/*" element={<ProfileSettings />} />
  
        {/* profileSettings */}
        {/* <Route path="/ticket/hotelTicket" element={<HotelTicket />} /> */}
        {/* <Route path="/ticket/aviaTicket" element={<AviaTicket />} /> */}

        {/* <Route path="/tickets" element={<Tickets />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}

        {/* <Route path="/basket/*" element={<Basket />} /> */}


        
        {/* <Route path="/payment" element={<StripeCheckoutButton />} /> */}


        {/* <Route path="/profile" element={<Profile />} /> */}


        <Route path="/" element={<HomePage />} />

        {/* 
          <GuardedRoute path='/projects/newProject' component={ NewProject } auth={store.users.isAuth}/>
          <GuardedRoute path='/projects/showProjects' component={ ShowProjects } auth={store.users.isAuth}/> */}
        {/* <Route path="/" component={ Home }/> */}
      </Routes>
    </BrowserRouter>
  );
}
