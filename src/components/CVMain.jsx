export default function CVMain({
  name,
  email,
  phone,
  school,
  course,
  startDate,
  endDate,
  workList,
  handleClickEdit,
  dateFormatter,
}) {
  return (
    // todo: create element with map
    <>
      <div className="contact-info">
        <h1>{name}</h1>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
      <div className="educ-info">
        <h2>
          <u>Education</u>
        </h2>
        <h3>{course}</h3>
        <p>{school}</p>
        <p>
          {startDate} - {endDate}
        </p>
      </div>
      <div className="work-info">
        <h2>
          <u>Work Background</u>
        </h2>
        {workList.map((work) => {
          return (
            <div className="work-item" key={work.company + startDate}>
              <button
                type="button"
                className="edit"
                onClick={(e) => {
                  handleClickEdit(e);
                }}
              >
                Edit
              </button>
              <h3>{work.position}</h3>
              <p>{work.company}</p>
              <p>{work.description}</p>
              <p>
                {dateFormatter(work.workStartDate)} -{" "}
                {dateFormatter(work.workEndDate)}
              </p>
              <p style={{ visibility: "hidden" }}>{work.id}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
