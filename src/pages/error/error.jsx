import { NavLink } from "react-router-dom";
import "./error.scss";

export default function Error() {
  return (
    <main className="error-404">
      <h1>404</h1>
      <h3>Oups! La page que vous demandez n'existe pas.</h3>
      <NavLink to={"/"}>Retourner sur la page d'accueil</NavLink>
    </main>
  );
}
