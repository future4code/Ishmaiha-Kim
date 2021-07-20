import React from "react"
import { Header } from "../components/header/Header"
import { FeedPage } from "../pages/feedpage/FeedPage"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Login } from "../pages/login/Login"
import { Register } from "../pages/register/Register"
import { Posts } from "../pages/posts/Posts"



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