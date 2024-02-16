import CVMain from "./CVMain";
import Contact from "./Contact";
import { useState } from "react";
import Education from "./Education";
import Work from "./Work";

function App() {
  const [name, setName] = useState("John Smith");
  const [email, setEmail] = useState("johnsmith@email.com");
  const [phone, setPhone] = useState("1234567890");
  const [school, setSchool] = useState("Bulacan State University");
  const [course, setCourse] = useState(
    "Bachelor of Science in Information Technology"
  );
  const [startDate, setStartDate] = useState("June 2013");
  const [endDate, setEndDate] = useState("June 2017");
  const [workBackground, setWorkBackground] = useState({
    position: "Data Analyst",
    company: "Accenture Inc",
    description: "Analyzing data for client",
    workStartDate: "February 2019",
    workEndDate: "May 2023",
  });

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeSchool = (e) => {
    setSchool(e.target.value);
  };

  const handleChangeCourse = (e) => {
    setCourse(e.target.value);
  };

  const dateFormatter = ([year, month]) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${months[Number(month) - 1]} ${year}`;
  };

  const handleChangeStartDate = (e) => {
    let formatted = dateFormatter(e.target.value.split("-"));
    setStartDate(formatted);
  };

  const handleChangeEndDate = (e) => {
    let formatted = dateFormatter(e.target.value.split("-"));
    setEndDate(formatted);
  };

  return (
    <>
      <Contact
        onChange={{ handleChangeName, handleChangeEmail, handleChangePhone }}
      />
      <Education
        onChange={{
          handleChangeSchool,
          handleChangeCourse,
          handleChangeStartDate,
          handleChangeEndDate,
        }}
      />
      <Work
        setWorkBackground={setWorkBackground}
        dateFormatter={dateFormatter}
      />
      <CVMain
        name={name}
        email={email}
        phone={phone}
        school={school}
        course={course}
        startDate={startDate}
        endDate={endDate}
        workBackground={workBackground}
      />
    </>
  );
}

export default App;
