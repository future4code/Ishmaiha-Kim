import React from "react"
import { Header } from "../components/Header/Header"
import { FeedPage } from "../pages/FeedPage/FeedPage"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Login } from "../pages/LoginPage/LoginPage"
import { Register } from "../pages/RegisterPage/RegisterPage"
import { Posts } from "../pages/PostsPage/PostsPage"



export const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
                <Switch>

                    <Route exact path ={"/"}>
                        <Login/>
                    </Route>

                    <Route exact path ={"/Register"}>
                        <Register/>
                    </Route>

                    <Route exact path ={"/FeedPage"}>
                        <FeedPage/>
                    </Route>
                    
                    <Route exact path ={"/Posts"}>
                        <Posts/>
                    </Route> 

                </Switch>
        </BrowserRouter>
    )
}
