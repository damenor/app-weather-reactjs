import { IRoute } from "../interfaces/IRoute";

import { AddZipCity } from "../pages/AddZipCity";
import { Detail } from "../pages/Detail";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

export const routes: IRoute[] = [
  { path: '/add-zip', component: AddZipCity },
  { path: '/detail', component: Detail, isRedirect: true },
  { path: '/home', component: Home },
  { path: '/not-found', component: NotFound },
]