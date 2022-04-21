import contacts from "../../assets/contactData";
import "./RenderContacts.css"

export default function RenderContacts() {
  let user = contacts.users.find((el) => el.userId === 1);
  return (
    <>
      <li className="nav-item">
        <a href={"mailto:'" + user.emailAddress + "'"}>
          <i className="bi bi-envelope"></i>
        </a>
      </li>
      <li className="nav-item">
        <a href={user.github_url}>
          <i className="bi bi-github"></i>
        </a>
      </li>
    </>
  );
}
