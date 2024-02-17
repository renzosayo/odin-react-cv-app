export default function Work({
  workBackgroundItem,
  setworkBackgroundItem,
  // dateFormatter,
  // reverseDateFormatter,
  handleAdd,
}) {
  return (
    <>
      <h1>Work Background</h1>
      <div className="work-form">
        <label htmlFor="position">Position</label>
        <input
          type="text"
          name="position"
          id="position"
          value={workBackgroundItem.position}
          onChange={(e) => {
            setworkBackgroundItem((prev) => {
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
          value={workBackgroundItem.company}
          onChange={(e) => {
            setworkBackgroundItem((prev) => {
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
          value={workBackgroundItem.description}
          cols="30"
          rows="10"
          className="description"
          onChange={(e) => {
            setworkBackgroundItem((prev) => {
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
          value={workBackgroundItem.workStartDate}
          onChange={(e) => {
            setworkBackgroundItem((prev) => {
              let formatted = e.target.value; //dateFormatter(e.target.value.split("-"));
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
          value={workBackgroundItem.workEndDate}
          onChange={(e) => {
            setworkBackgroundItem((prev) => {
              let formatted = e.target.value; //dateFormatter(e.target.value.split("-"));
              return {
                ...prev,
                workEndDate: formatted,
              };
            });
          }}
        />
        <button
          className="add-work"
          onClick={() => {
            handleAdd();
            // reset fields
            setworkBackgroundItem({
              position: "",
              company: "",
              description: "",
              workStartDate: "",
              workEndDate: "",
            });
            // document.querySelector("#position").value = "";
            // document.querySelector("#company").value = "";
            // document.querySelector("#description").value = "";
            // document.querySelector("#workStartDate").value = "";
            // document.querySelector("#workEndDate").value = "";
          }}
        >
          Add to CV
        </button>
      </div>
    </>
  );
}
