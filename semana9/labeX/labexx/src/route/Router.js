import {Homepage} from "../pages/homepage/Homepage";
import {ListTripsPage} from "../pages/listTrips/ListTripsPage";
import {ApplicationFormPage} from "../pages/application/ApplicationFormPage";
import {LoginPage} from "../pages/login/LoginPage";
import {TripDetailsPage} from "../pages/tripDetails/TripDetailsPage";
import {AdminHomePage} from "../pages/adminHome/AdminHomePage";
import {CreateTripPage} from "../pages/createTrip/CreateTripPage";
import {Switch, Route, BrowserRouter} from "react-router-dom"


export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/trips/list">
                    <ListTripsPage/>
                </Route>
                
                <Route exact path="/">
                    <Homepage/>
                </Route>

                <Route exact path="/trips/application">
                    <ApplicationFormPage/>
                </Route>

                <Route exact path="/login">
                    <LoginPage/>
                </Route>

                <Route exact path="/admin/trips/list">
                    <AdminHomePage/>
                </Route>

                <Route exact path="/admin/trips/create">
                    <CreateTripPage/>
                </Route>

                <Route exact path="/admin/trips/:id">
                    <TripDetailsPage/>
                </Route>

            </Switch>
    
        </BrowserRouter>
    
    )

}