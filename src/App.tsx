import { useToggle } from "./hooks/useToggle";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Avatar from "./components/ui/Avatar/Avatar";
import Button from "./components/ui/Button/Button";
import Input from "./components/ui/Input/Input";
import Tooltip from "./components/ui/Tooltip/Tooltip";
import Card from "./components/ui/Card/Card";

function App() {
  const [name, setName] = useLocalStorage<string>("user-name", "Willys Arnel");
  const [email, setEmail] = useLocalStorage<string>("user-email", "");

  const [showDetails, toggleDetails] = useToggle(false);

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center gap-10">
      <h1 className="text-3xl font-bold text-slate-800">React Component Lab</h1>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center gap-4 w-full max-w-md text-center">
        <Avatar
          name={name}
          size="xl"
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Willys"
        />
        <div>
          <h2 className="text-xl font-semibold">{name || "Utilisateur"}</h2>
          <p className="text-slate-500 text-sm">Développeur Fullstack</p>
        </div>
        <Button variant="secondary" size="sm" onClick={toggleDetails}>
          {showDetails ? "Masquer les détails" : "Voir les détails"}
        </Button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 w-full max-w-md flex flex-col gap-4">
        <Input
          label="Nom complet"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ex: John Doe"
        />

        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre@email.com"
          error={email.length > 0 && !email.includes("@") ? "Email invalide" : ""}
        />

        <div className="flex gap-2 mt-2">
          <Tooltip content="Les données sont sauvegardées localement" position="bottom">
            <Button variant="primary" className="flex-1">Sauvegarder</Button>
          </Tooltip>
        </div>
      </div>

      {showDetails && (
        <Card className="max-w-md w-full animate-in fade-in slide-in-from-top-4 duration-300">
          <Card.Header>Détails du Projet</Card.Header>
          <Card.Body>
            <p className="text-slate-600">
              Ceci est une section rétractable gérée par <strong>useToggle</strong>.
              Tes informations (Nom: {name}) sont stockées dans le <strong>LocalStorage</strong>.
            </p>
          </Card.Body>
          <Card.Footer>
            <Button variant="secondary" size="sm" onClick={toggleDetails}>Fermer</Button>
          </Card.Footer>
        </Card>
      )}

      <div className="flex gap-4 items-center bg-slate-200/50 p-4 rounded-lg border border-slate-300">
        <p className="text-sm font-medium text-slate-600">Avatars :</p>
        <Avatar name="Koloina Razafindratsira" size="sm" />
        <Avatar name="Tsiry Sandratraina" size="sm" src="dead-link.jpg" />
      </div>
    </div>
  );
}

export default App;
