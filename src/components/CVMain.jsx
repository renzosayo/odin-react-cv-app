export default function CVMain({
  name,
  email,
  phone,
  school,
  course,
  startDate,
  endDate,
}) {
  return (
    <>
      <div className="contact-info">
        <h1>{name}</h1>
        <h3>{email}</h3>
        <h3>{phone}</h3>
      </div>
      <div className="education-info">
        <h1>{course}</h1>
        <h3>{school}</h3>
        <h3>
          {startDate} - {endDate}
        </h3>
      </div>
    </>
  );
}
