import AuthLayout from "../layout/authLayout";
import MainLayout from "../layout/mainLayout";
import ForgotPasswordForm from "../pages/ForgotPasswordForm/ForgotPasswordForm";

import Home from "../pages/Home/Home";
import LoginForm from "../pages/LoginForm/LoginForm";
import ProfileCompany from "../pages/ProfileCompany";
import StudyCase from "../pages/StudyCase/StudyCase";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";

export const routes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "case-study",
          element: <StudyCase />,
        },
        {
          path: "profile-company/:id",
          element: <ProfileCompany />,
        },
        {
          path:"dashboard",
          element: <AdminDashboard/>
        }
      ],
    },
    {
      path:"/auth",
      element: <AuthLayout/>,
      children:[
        {
          path: "",
          element: <LoginForm />,
        },
        {
          path: "forget-password",
          element: <ForgotPasswordForm />,
        },

      ],
    }
  ];
  