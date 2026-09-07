import "./App.css";
import Landingpage from "./landing";
import Register from "./landing/Registration/sign-up";
import Loginpage from "./landing/Registration/login";
import ProgrammePage from "./landing/programme-page";
import { Routes, Route } from "react-router-dom";
import AdmissionPage from "./landing/admission";

// Aspirant imports
import Aspiranthomepage from "./Aspirantpage";
import AspirantStatus from "./Aspirantpage/aspirantstatus";
import Application from "./Aspirantpage/aspirantapplication";
import Profile from "./Aspirantpage/aspirantprofile/Profile";
// import Programmedata from "./Aspirantpage/aspirantapplication/Components/programmedata";
// import Biodata from "./Aspirantpage/aspirantapplication/Components/Biodata";
// import Documentdata from "./Aspirantpage/aspirantapplication/Components/Documentdata";

// School Admin imports
import Schooladminhomepage from "./Adminpage";
import Adminfaculties from "./Adminpage/admin-faculties";
import Admindepartments from "./Adminpage/admin-departments";
import Adminlevels from "./Adminpage/admin-levels";
import Admincourses from "./Adminpage/admin-courses";
import Adminlecturer from "./Adminpage/admin-lecturer";
import Adminsessions from "./Adminpage/admin-sessions";
import Adminstudents from "./Adminpage/admin-student";

import Adminaspirant from "./Adminpage/admin-aspirant";
import AspirantDetails from "./Adminpage/admin-aspirant/components/aspirant-details-page";
import DisplaydepartmentId from "./Adminpage/components/displays/display-departmentsId";
import DisplaylevelsID from "./Adminpage/components/displays/display-levelsId";
import DisplaycourseId from "./Adminpage/components/displays/display-courseId";

// Lectuirer page
import Lecturerpage from "./lecturerpage";
import Lecturerdashboard from "./lecturerpage/lecturer-dashboard";
import Lecturercourses from "./lecturerpage/lecturer-courses";
import Coursematerial from "./lecturerpage/course-material";

// student pages

import Studenthomepage from "./student-page";
import StudentDashboard from "./student-page/student-dashboard";
import StudentCourses from "./student-page/student-courses";
import StudentCoursesMaterial from "./student-page/student-course-material";
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
