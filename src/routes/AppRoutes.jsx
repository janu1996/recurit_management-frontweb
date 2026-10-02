import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import EditJob from "../pages/EditJob";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Favorites from "../pages/Favorites";
import ApplyJob from "../pages/ApplyJob";
import ProtectedRoute from "./ProtectedRoute";
import MyApplications from "../pages/MyApplications";
import ApplicationDetails from "../pages/ApplicationDetails";

function AppRoutes() {
  return (
    <Routes>

      {/* Home */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* Jobs */}
      <Route
        path="/jobs"
        element={<Jobs />}
      />

      {/* Job Details */}
      <Route
        path="/jobs/:id"
        element={<JobDetails />}
      />

      {/* Register */}
      <Route
        path="/register"
        element={<Register />}
      />

      {/* Login */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* Logout */}
      <Route
        path="/logout"
        element={<Logout />}
      />

      {/* Favorites */}
      <Route
        path="/favorites"
        element={<Favorites />}
      />

      {/* Apply for Job */}
      <Route
        path="/apply/:id"
        element={
          <ProtectedRoute>
            <ApplyJob />
          </ProtectedRoute>
        }
      />

      {/* Add Job - Login Required */}
      <Route
        path="/add-job"
        element={
          <ProtectedRoute>
            <AddJob />
          </ProtectedRoute>
        }
      />

      {/* Edit Job - Login Required */}
      <Route
        path="/edit-job/:id"
        element={
          <ProtectedRoute>
            <EditJob />
          </ProtectedRoute>
        }
      />
      
      <Route
  path="/my-applications"
  element={
    <ProtectedRoute>
      <MyApplications />
    </ProtectedRoute>
  }
/>
  
  <Route
  path="/application/:id"
  element={
    <ProtectedRoute>
      <ApplicationDetails />
    </ProtectedRoute>
  }
/>

    </Routes>
  );
}

export default AppRoutes;