import React from 'react'
import {
    BrowserRouter,
    Routes as Switch,
    Route,
    PathRouteProps,
  } from 'react-router-dom'
import { BasePath } from '../configs/paths'
  
export function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            {BasePath.map((path, index)=>(
            <Route key={index} {...path} />
            ))}
        </Switch>
        </BrowserRouter>
    )
}