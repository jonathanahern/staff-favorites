import React from "react";
import { Route } from "react-router-dom";
// import LoginFormContainer from "../components/session/login_form_container";
// import SignupFormContainer from "../components/session/signup_form_container";
// import Splash from "../components/splash/splash"
// import TourContainer from "../components/tour/tour_container"
import EmployeeIndexContainer from "../components/employee_index/employee_index_container"
// import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
    <>

        {/* <ProtectedRoute exact path="/tours/create" component={TourContainer} /> */}
        <Route path="/employees" component={EmployeeIndexContainer} />
        {/* <AuthRoute exact path="/" component={Splash} /> */}
    </>
);

export default App;