import "./App.css";

// Votre rôle est de construire une interface de supervision des utilisateurs.
// Vous devez créer une colone qui liste les utilisateurs sur la gauche de l'écran
// et une colonne qui liste l'utilistaur sélectionné sur la droite de l'écran.

const App = () => {
  return (
    <div className="twoColumnsContainer">
      <div className="usersListView">
        <h1>Liste utilisateurs</h1>

        <ul>
          <li>User 1</li>
          <li>User 2</li>
          <li>User 3</li>
        </ul>
      </div>

      <div className="selectedUserView">
        <h2>Utilisateur sélectionné</h2>

        <div>
          <p>Nom :</p>
          <p>Prénom :</p>
          <p>Email :</p>
          <p>Téléphone :</p>
        </div>
      </div>
    </div>
  );
};

export default App;
