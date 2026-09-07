import "./App.css";
import Landingpage from "./pages/guest";
import Register from "./pages/guest/Registration/sign-up";
import Loginpage from "./pages/guest/Registration/login";
import ProgrammePage from "./pages/guest/programme-page";
import { Routes, Route } from "react-router-dom";
import AdmissionPage from "./pages/guest/admission";

// Aspirant imports
import Aspiranthomepage from "./pages/aspirant";
import AspirantStatus from "./pages/aspirant/aspirantstatus";
import Application from "./pages/aspirant/aspirantapplication";
import Profile from "./pages/aspirant/aspirantprofile/Profile";
// import Programmedata from "./Aspirantpage/aspirantapplication/Components/programmedata";
// import Biodata from "./Aspirantpage/aspirantapplication/Components/Biodata";
// import Documentdata from "./Aspirantpage/aspirantapplication/Components/Documentdata";

// School Admin imports
import Schooladminhomepage from "./pages/admin";
import Adminfaculties from "./pages/admin/admin-faculties";
import Admindepartments from "./pages/admin/admin-departments";
import Adminlevels from "./pages/admin/admin-levels";
import Admincourses from "./pages/admin/admin-courses";
import Adminlecturer from "./pages/admin/admin-lecturer";
import Adminsessions from "./pages/admin/admin-sessions";
import Adminstudents from "./pages/admin/admin-student";

import Adminaspirant from "./pages/admin/admin-aspirant";
import AspirantDetails from "./pages/admin/admin-aspirant/components/aspirant-details-page";
import DisplaydepartmentId from "./pages/admin/components/displays/display-departmentsId";
import DisplaylevelsID from "./pages/admin/components/displays/display-levelsId";
import DisplaycourseId from "./pages/admin/components/displays/display-courseId";

// Lectuirer page
import Lecturerpage from "./pages/lecturer";
import Lecturerdashboard from "./pages/lecturer/lecturer-dashboard";
import Lecturercourses from "./pages/lecturer/lecturer-courses";
import Coursematerial from "./pages/lecturer/course-material";

// student pages

import Studenthomepage from "./pages/student";
import StudentDashboard from "./pages/student/student-dashboard";
import StudentCourses from "./pages/student/student-courses";
import StudentCoursesMaterial from "./pages/student/student-course-material";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Loginpage />} />
        <Route path="/Programmes" element={<ProgrammePage />} />
        <Route path="/Admission" element={<AdmissionPage />} />

        {/* aspirant routes */}

        <Route path="/aspirant" element={<Aspiranthomepage />}>
          <Route index element={<AspirantStatus />} />
          <Route path="status" element={<AspirantStatus />} />
          <Route path="application" element={<Application />}>
            {/* <Route path="programme" element={<Programmedata />} />
            <Route path="personal-details" element={<Biodata />} />
            <Route path="documents" element={<Documentdata />} /> */}
          </Route>
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Lecturer route */}

        <Route path="/lecturer" element={<Lecturerpage />}>
          <Route index element={<Lecturerdashboard />} />
          <Route path="dashboard" element={<Lecturerdashboard />} />
          <Route path="courses" element={<Lecturercourses />} />
          <Route path="course-material" element={<Coursematerial />} />
        </Route>

        {/* Admin routes  */}

        <Route path="/admin" element={<Schooladminhomepage />}>
          <Route index element={<Adminfaculties />} />
          <Route path="faculties" element={<Adminfaculties />} />
          <Route path="departments" element={<Admindepartments />} />
          <Route path="levels" element={<Adminlevels />} />
          <Route path="courses" element={<Admincourses />} />
          <Route path="students" element={<Adminstudents />} />
          {/* <Route path = "logout" element ={<Logout />} /> */}
          <Route path="lecturer" element={<Adminlecturer />} />
          <Route path="admin_aspirant" element={<Adminaspirant />} />
          <Route path="admin_aspirant/:id" element={<AspirantDetails />} />
          <Route path="sessions" element={<Adminsessions />} />
          <Route
            path="faculties/:facultyId/departments"
            element={<DisplaydepartmentId />}
          />
          <Route
            path="departments/:departmentId/levels"
            element={<DisplaylevelsID />}
          />
          <Route path="levels/:levelId/courses" element={<DisplaycourseId />} />
          {/* <Route path="sessions/:id" element={<Sessiondetails />} /> */}
        </Route>

        {/* Student dashboard */}

        <Route path="/student" element={<Studenthomepage />}>
          <Route index element={<StudentDashboard />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="courses" element={<StudentCourses />} />
          <Route path="course-material" element={<StudentCoursesMaterial />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
