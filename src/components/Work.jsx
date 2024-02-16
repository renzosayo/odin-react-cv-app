export default function Work() {
  return (
    <>
      <h1>Work Background</h1>
      <div className="work-info">
        <label htmlFor="position">Position</label>
        <input type="text" name="position" id="position" />
        <label htmlFor="company">Company</label>
        <input type="text" name="company" id="company" />
        <label htmlFor="description">Job Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          className="description"
        ></textarea>
        <label htmlFor="workStartDate">From</label>
        <input type="month" name="workStartDate" id="workStartDate" />
        <label htmlFor="workEndDate">Until</label>
        <input type="month" name="workEndDate" id="workEndDate" />
        <button className="add-work">Add to CV</button>
      </div>
    </>
  );
}
