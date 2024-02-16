export default function Work({ setWorkBackground, dateFormatter }) {
  return (
    <>
      <h1>Work Background</h1>
      <div className="work-info">
        <label htmlFor="position">Position</label>
        <input
          type="text"
          name="position"
          id="position"
          onChange={(e) => {
            setWorkBackground((prev) => {
              return {
                ...prev,
                position: e.target.value,
              };
            });
          }}
        />
        <label htmlFor="company">Company</label>
        <input
          type="text"
          name="company"
          id="company"
          onChange={(e) => {
            setWorkBackground((prev) => {
              return {
                ...prev,
                company: e.target.value,
              };
            });
          }}
        />
        <label htmlFor="description">Job Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          className="description"
          onChange={(e) => {
            setWorkBackground((prev) => {
              return {
                ...prev,
                description: e.target.value,
              };
            });
          }}
        ></textarea>
        <label htmlFor="workStartDate">From</label>
        <input
          type="month"
          name="workStartDate"
          id="workStartDate"
          onChange={(e) => {
            setWorkBackground((prev) => {
              let formatted = dateFormatter(e.target.value.split("-"));
              return {
                ...prev,
                workStartDate: formatted,
              };
            });
          }}
        />
        <label htmlFor="workEndDate">Until</label>
        <input
          type="month"
          name="workEndDate"
          id="workEndDate"
          onChange={(e) => {
            setWorkBackground((prev) => {
              let formatted = dateFormatter(e.target.value.split("-"));
              return {
                ...prev,
                workEndDate: formatted,
              };
            });
          }}
        />
        <button className="add-work">Add to CV</button>
      </div>
    </>
  );
}
