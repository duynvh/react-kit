const privateRoutes = [

];

const publicRoutes = [
  {
    path: "/products",
    exact: true,
    loader: () => import("containers/ProductPage"),
  },
];

const errorRoutes = [
  {
    path: "/401",
    exact: true,
    loader: () => import("shared/Error/Error401Page"),
  },
  {
    path: "/403",
    exact: true,
    loader: () => import("shared/Error/Error403Page"),
  },
  {
    path: "/404",
    exact: true,
    loader: () => import("shared/Error/Error404Page"),
  },
  {
    path: "/500",
    exact: true,
    loader: () => import("shared/Error/Error500Page"),
  },
];

// const authRoutes = [
//   {
//     path: "/signin",
//     exact: true,
//     loader: () => import("./AuthPage/SigninPage"),
//   },
//   {
//     path: "/signup",
//     exact: true,
//     loader: () => import("./AuthPage/SignupPage"),
//   },
//   {
//     path: "/password-reset",
//     exact: true,
//     loader: () => import("./AuthPage/SendResetPasswordPage"),
//   },
//   {
//     path: "/new-password",
//     exact: true,
//     loader: () => import("./AuthPage/ChangePasswordPage"),
//   },
//   {
//     path: "/verify-email",
//     exact: true,
//     loader: () => import("./AuthPage/VerifyEmailPage"),
//   }
// ];

export default {
  privateRoutes,
  publicRoutes,
  errorRoutes,
  // authRoutes,
};