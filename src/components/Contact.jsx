export default function Contact({ onChange }) {
  return (
    <>
      <h1>Contact Info</h1>
      <div className="contact-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="name"
          onChange={onChange.handleChangeName}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="email"
          onChange={onChange.handleChangeEmail}
        />
        <label htmlFor="phone">Phone number</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="phone"
          onChange={onChange.handleChangePhone}
        />
      </div>
    </>
  );
}
