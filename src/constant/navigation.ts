import { Home, Box, Package, Users } from "lucide-react";
import * as Page from "../view/pages";
import * as Layout from "../view/layouts";
import { IRoute } from "@/types";

export const Routes: IRoute[] = [
  // -- authenticated
  {
    label: "Dashboard",
    path: "/",
    isAbsolute: true,
    page: Page.DashBoard,
    layout: Layout.DashLayouts,
    icon: Home,
  },
  {
    label: "Product",
    path: "/product",
    isAbsolute: true,
    page: Page.Product,
    layout: Layout.DashLayouts,
    icon: Box,
  },
  {
    label: "Order Manage",
    path: "/order-manage",
    isAbsolute: true,
    page: Page.OrderManege,
    layout: Layout.DashLayouts,
    icon: Package,
  },
  {
    label: "User Manage",
    path: "/user-manage",
    isAbsolute: true,
    page: Page.UserManege,
    layout: Layout.DashLayouts,
    icon: Users,
  },
  // -- non authenticated
  // {
  //   label: "Login",
  //   path: "/login",
  //   isAbsolute: false,
  //   page: Page.LoginPage,
  //   layout: Layout.AuthLayout,
  //   icon: LoginIcon
  // },
  // {
  //   label: "Register",
  //   path: "/register",
  //   isAbsolute: false,
  //   page: Page.RegisterPage,
  //   layout: Layout.AuthLayout,
  //   icon: UserPlus
  // },
  // {
  //   label: "Logout",
  //   path: "/logout",
  //   isAbsolute: false,
  //   page: Page.LogoutPage,
  //   layout: Layout.AuthLayout,
  //   icon: LogOut
  // },
];
