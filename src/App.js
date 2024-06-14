import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import MyProfile from "./Components/Dashboard/MyProfile";
import AddMember from "./Components/Dashboard/AdminDashboardItems/AddMember";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Footer from "./Components/Shared/Footer/Footer";
import AttendanceReports from "./Components/Dashboard/AdminDashboardItems/AttendanceReports";
import EmployeeTask from "./Components/Dashboard/AdminDashboardItems/EmployeeTask";
import ManageAttendance from "./Components/Dashboard/AdminDashboardItems/ManageAttendance";
import ManageEmployee from "./Components/Dashboard/AdminDashboardItems/ManageEmployee";
import ReviewYourTeamMember from "./Components/Dashboard/AdminDashboardItems/ReviewYourTeamMember";
import AssignedTasks from "./Components/Dashboard/MemberDashboardItems/AssignedTasks";
import CompletedTask from "./Components/Dashboard/MemberDashboardItems/CompletedTask";
import UncompletedTask from "./Components/Dashboard/MemberDashboardItems/UncompletedTask";
import TaskForwarding from "./Components/Dashboard/MemberDashboardItems/TaskForwarding";
import Register from "./Components/Entry/Register";
import EmployeeLogin from "./Components/Entry/EmployeeLogin";
import AdminLogin from "./Components/Entry/AdminLogin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyTeams from "./Components/Dashboard/AdminDashboardItems/MyTeams";
import SingleTeam from "./Components/Dashboard/AdminDashboardItems/SingleTeam";
import InnerHome from "./Components/Home/InnerHome";
import Menu from "./Components/Home/Menu";
import CreateTeam from "./Components/Home/CreateTeam";
import NotFound from "./Components/ErroPages/NotFound";
import Denied from "./Components/ErroPages/Denied";
import TodaysTasks from "./Components/Dashboard/AdminDashboardItems/TodaysTasks";
import RequireAdmin from "./Components/RequireAuth/RequireAdmin";
import RequireMember from "./Components/RequireAuth/RequireMember";
import RequireCommon from "./Components/RequireAuth/RequireCommon";
import Settings from "./Components/Dashboard/AdminDashboardItems/Settings";
import AllNotifications from "./Components/AllNotifications/AllNotifications";
import ForwardedTasks from "./Components/Dashboard/AdminDashboardItems/ForwardedTasks";
import AboutUs from "./Components/AboutUs/AboutUs";

function App() {
  return (
    <div className="rl-bg font-serif">
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/myProfile"
          element={
            <RequireCommon>
              <MyProfile></MyProfile>
            </RequireCommon>
          }
        ></Route>
        <Route
          path="/allNotifications"
          element={
            <RequireCommon>
              <AllNotifications></AllNotifications>
            </RequireCommon>
          }
        ></Route>
        <Route
          path="/innerHome"
          element={
            <RequireAdmin>
              <InnerHome></InnerHome>
            </RequireAdmin>
          }
        >
          <Route
            index
            element={
              <RequireAdmin>
                <CreateTeam></CreateTeam>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path=":teamName"
            element={
              <RequireAdmin>
                <Menu></Menu>
              </RequireAdmin>
            }
          >
            <Route
              index
              element={
                <RequireAdmin>
                  <CreateTeam></CreateTeam>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="addMember"
              element={
                <RequireAdmin>
                  <AddMember></AddMember>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="manageEmployee"
              element={
                <RequireAdmin>
                  <ManageEmployee></ManageEmployee>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="employeeTask"
              element={
                <RequireAdmin>
                  <EmployeeTask></EmployeeTask>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="todaysTask"
              element={
                <RequireAdmin>
                  <TodaysTasks></TodaysTasks>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="forwardedTask"
              element={
                <RequireAdmin>
                  <ForwardedTasks></ForwardedTasks>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="reviewYourTeamMember"
              element={
                <RequireAdmin>
                  <ReviewYourTeamMember></ReviewYourTeamMember>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="settings"
              element={
                <RequireAdmin>
                  <Settings></Settings>
                </RequireAdmin>
              }
            ></Route>
          </Route>
        </Route>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/employeeLogin"
          element={<EmployeeLogin></EmployeeLogin>}
        ></Route>
        <Route path="/adminLogin" element={<AdminLogin></AdminLogin>}></Route>
        <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireMember>
              <Dashboard></Dashboard>
            </RequireMember>
          }
        >
          <Route
            index
            element={
              <RequireCommon>
                <MyProfile></MyProfile>
              </RequireCommon>
            }
          ></Route>
          {/* <Route path="myTeams" element={<MyTeams></MyTeams>}></Route>
          <Route path="attendanceReports" element={<AttendanceReports></AttendanceReports>}></Route> */}
          {/* <Route path="manageAttendance" element={<ManageAttendance></ManageAttendance>}></Route> */}
          <Route
            path="assignedTasks"
            element={
              <RequireMember>
                <AssignedTasks></AssignedTasks>
              </RequireMember>
            }
          ></Route>
          <Route
            path="completedTask"
            element={
              <RequireMember>
                <CompletedTask></CompletedTask>
              </RequireMember>
            }
          ></Route>
          <Route
            path="uncompletedTask"
            element={
              <RequireMember>
                <UncompletedTask></UncompletedTask>
              </RequireMember>
            }
          ></Route>
          <Route
            path="taskForwarding"
            element={
              <RequireMember>
                <TaskForwarding></TaskForwarding>
              </RequireMember>
            }
          ></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/denied" element={<Denied />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
