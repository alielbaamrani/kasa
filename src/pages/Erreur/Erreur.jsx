import "./Erreur.scss";
import React from "react";
import { Link, } from "react-router-dom";

export default function Error() {
  return (
    <div className="Erreur">
      <header className="App-header-erreur">
        <h1> 404 </h1>
        <h2> Oups! La page que vous demandez n existe pas.</h2>
        <Link className="backHome" to="/">
          Retourner sur la page d&apos;accueil
        </Link>
      </header>
    </div>
  );
}
