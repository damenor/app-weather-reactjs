import React from 'react'
import { Route, Redirect } from "react-router-dom"

import { IRoute } from "../interfaces/IRoute"
import { routes } from '../constants/routes'

const createRedirect = (path: string) => <Redirect key={`redirect-${path}`} to={path} exact={true}/>

export const getRoutes = () => {
  let redirect = <></>;
  const _routes = routes.map((route: IRoute, i: number) => {
    if(route.isRedirect) redirect = createRedirect(route.path)
    return <Route key={`${i}-${route.path}`} path={route.path} component={route.component} exact={true}/>
  })

  return [ ..._routes, redirect ]
}