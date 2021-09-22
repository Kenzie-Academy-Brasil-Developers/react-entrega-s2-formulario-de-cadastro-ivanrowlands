import { Switch, Route } from "react-router-dom"

import FormRegister from "../pages/FormRegister";
import Login from "../pages/Login";

const Routes = () =>{
    return (
        <Switch>
            <Route path="/:name">
                <Login />
            </Route>
            <Route path="/">
                <FormRegister />
            </Route>
        </Switch>
    )
}

export default Routes;