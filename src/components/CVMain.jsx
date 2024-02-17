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
        <h3>{email}</h3>
        <h3>{phone}</h3>
      </div>
      <div className="education-info">
        <h2>{course}</h2>
        <h3>{school}</h3>
        <h3>
          {startDate} - {endDate}
        </h3>
      </div>
      {workList.map((work) => {
        return (
          <div key={work.company + startDate}>
            <button
              className="edit"
              onClick={(e) => {
                handleClickEdit(e);
              }}
            >
              Edit
            </button>
            <h2>{work.position}</h2>
            <h3>{work.company}</h3>
            <h3>{work.description}</h3>
            <h3>
              {dateFormatter(work.workStartDate)} -{" "}
              {dateFormatter(work.workEndDate)}
            </h3>
            <p style={{ visibility: "hidden" }}>{work.id}</p>
          </div>
        );
      })}
    </>
  );
}
