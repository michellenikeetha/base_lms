import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import ForgotPassword from "pages/ForgotPassword";
import Login from "pages/Login";
import LandingPage from "pages/LandingPage";
import MyCourses from "pages/MyCourses";
import Announcements from "pages/Announcements";
import ProfilePage from "pages/ProfilePage";
import Assignments from "pages/Assignments";
import Assignmentsdone from "pages/Assignmentsdone";
import Announcementsdetail from "pages/Announcementsdetail";
import Assignmentssubmission from "pages/Assignmentssubmission";
import Assignmentssubmissionedit from "pages/Assignmentssubmissionedit";
import Signup from "pages/Signup";
import AssignmentssubmissionTwo from "pages/AssignmentssubmissionTwo";
import Loginwithnotification from "pages/Loginwithnotification";
import Loginwithcourses from "pages/Loginwithcourses";
import AssignmentssubmissionThree from "pages/AssignmentssubmissionThree";
import AssignmentssubmissionFour from "pages/AssignmentssubmissionFour";
import AssignmentssubmissionFive from "pages/AssignmentssubmissionFive";
import AssignmentssubmissionSix from "pages/AssignmentssubmissionSix";

const ProjectRoutes = () => {
    let element = useRoutes([

    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    { path: "forgotpassword", element: <ForgotPassword />,},
    { path: "login", element: <Login /> },
    { path: "landingpage", element: <LandingPage /> },
    { path: "mycourses", element: <MyCourses /> },
    { path: "announcements", element: <Announcements /> },
    { path: "profilepage", element: <ProfilePage /> },
    { path: "assignments", element: <Assignments /> },
    { path: "assignmentsdone", element: <Assignmentsdone /> },
    { path: "announcementsdetail", element: <Announcementsdetail /> },
    { path: "assignmentssubmission", element: <Assignmentssubmission />,},
    { path: "assignmentssubmissionedit", element: <Assignmentssubmissionedit />,},
    { path: "signup", element: <Signup /> },
    { path: "assignmentssubmissionTwo", element: <AssignmentssubmissionTwo />,},
    { path: "loginwithnotification", element: <Loginwithnotification />,},
    { path: "loginwithcourses", element: <Loginwithcourses />,},
    { path: "assignmentssubmissionThree", element: <AssignmentssubmissionThree />,},
    { path: "assignmentssubmissionFour", element: <AssignmentssubmissionFour />,},
    { path: "assignmentssubmissionFive", element: <AssignmentssubmissionFive />,},
    { path: "assignmentssubmissionSix", element: <AssignmentssubmissionSix />,},
    
    ]);
    return element;
};

export default ProjectRoutes;