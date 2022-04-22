import contact from "./contactData";
import "./RenderContact.css";

export default function RenderContact() {
  let user = contact.users.find((el) => el.userId === 1);
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" href={"mailto:'" + user.emailAddress + "'"}>
          <i className="bi bi-envelope"></i>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href={user.github_url}>
          <i className="bi bi-github"></i>
        </a>
      </li>
    </>
  );
}
