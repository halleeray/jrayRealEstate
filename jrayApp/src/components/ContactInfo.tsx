import "../assets/css/ContactInfo.css";

function ContactInfo() {
  const photoPath = "images/jrayheadshot.png";
  const agentName = "Julie Ray";
  const lic = "IA100007942";
  const title = "Luxury Collection Specialist";
  const email = "jraywinterpark@gmail.com";
  const phone = "(970) 531-0211";

  return (
    <div className="contactCard">
      <img src={photoPath} id="agentPhoto"></img>
      <div className="agentInfo">
        <p id="agentName">{agentName}</p>
        <p id="lic">LIC # {lic}</p>
        <p id="agentTitle">{title}</p>
        <p id="agentEmail">{email}</p>
        <p id="agentPhone">Direct: {phone}</p>
      </div>
    </div>
  );
}

export default ContactInfo;
