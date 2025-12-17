interface Props {
  email: string;
  phone: string;
}

function Contact({ email, phone }: Props) {
  return (
    <div>
      <h1>Contact</h1>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
}

export default Contact;
