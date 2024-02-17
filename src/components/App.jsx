import CVMain from "./CVMain";
import Contact from "./Contact";
import { useState } from "react";
import Education from "./Education";
import Work from "./Work";

function App() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("John Smith");
  const [email, setEmail] = useState("johnsmith@email.com");
  const [phone, setPhone] = useState("1234567890");
  const [school, setSchool] = useState("Bulacan State University");
  const [course, setCourse] = useState(
    "Bachelor of Science in Information Technology"
  );
  const [startDate, setStartDate] = useState("June 2013");
  const [endDate, setEndDate] = useState("June 2017");
  const [workBackgroundItem, setworkBackgroundItem] = useState({
    position: "",
    company: "",
    description: "",
    workStartDate: "",
    workEndDate: "",
    id: id,
  });
  const [workList, setWorkList] = useState([]);

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

  const dateFormatter = (string) => {
    // catch error
    if (!string) return "";
    let [year, month] = string.split("-");
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

  const reverseDateFormatter = (string) => {
    // catch error
    if (!string) return "";
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
    let date = string.split(" ");
    let month = months.indexOf(date[0]) + 1;
    month < 10 ? (month = `0${month}`) : String(month);
    return `${date[1]}-${month}`;
  };

  const handleChangeStartDate = (e) => {
    let formatted = dateFormatter(e.target.value.split("-"));
    setStartDate(formatted);
  };

  const handleChangeEndDate = (e) => {
    let formatted = dateFormatter(e.target.value.split("-"));
    setEndDate(formatted);
  };

  const handleClickAddWork = () => {
    const workItem = { ...workBackgroundItem, id: id };
    setworkBackgroundItem(workItem);
    setWorkList((prev) => [...prev, workItem]);
    setId(id + 1);
    document.querySelector("#position").value = "";
    document.querySelector("#company").value = "";
    document.querySelector("#description").value = "";
    document.querySelector("#workStartDate").value = "";
    document.querySelector("#workEndDate").value = "";
  };

  const handleClickEdit = (e) => {
    const selected = [...e.target.parentElement.childNodes].map(
      (child) => child.textContent
    );
    let [start, end] = selected[4].split(" - ");

    setworkBackgroundItem({
      position: selected[1],
      company: selected[2],
      description: selected[3],
      workStartDate: reverseDateFormatter(start),
      workEndDate: reverseDateFormatter(end),
    });

    // document.querySelector("#position").value = selected[1];
    // document.querySelector("#company").value = selected[2];
    // document.querySelector("#description").value = selected[3];
    // document.querySelector("#workStartDate").value =
    //   reverseDateFormatter(start);
    // document.querySelector("#workEndDate").value = reverseDateFormatter(end);
    setWorkList((prev) => {
      return prev.filter((workBg) => Number(workBg.id) !== Number(selected[5]));
    });
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
        setworkBackgroundItem={setworkBackgroundItem}
        dateFormatter={dateFormatter}
        reverseDateFormatter={reverseDateFormatter}
        handleAdd={handleClickAddWork}
        workBackgroundItem={workBackgroundItem}
      />
      <CVMain
        name={name}
        email={email}
        phone={phone}
        school={school}
        course={course}
        startDate={startDate}
        endDate={endDate}
        workBackgroundItem={workBackgroundItem}
        dateFormatter={dateFormatter}
        workList={workList}
        handleClickEdit={handleClickEdit}
      />
    </>
  );
}

export default App;
