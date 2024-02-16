export default function Education({ onChange }) {
  return (
    <>
      <h1>Educational Background</h1>
      <div className="educ-form">
        <label htmlFor="course">Course</label>
        <input
          type="text"
          name="course"
          id="course"
          onChange={onChange.handleChangeCourse}
        />
        <label htmlFor="school">School</label>
        <input
          type="text"
          name="school"
          id="school"
          onChange={onChange.handleChangeSchool}
        />
        <label htmlFor="startDate">From</label>
        <input
          type="month"
          name="startDate"
          id="startDate"
          onChange={onChange.handleChangeStartDate}
        />
        <label htmlFor="finishDate">Until</label>
        <input
          type="month"
          name="finishDate"
          id="finishDate"
          onChange={onChange.handleChangeEndDate}
        />
      </div>
    </>
  );
}
