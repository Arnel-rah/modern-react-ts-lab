import { useState } from "react";
import Button from "./components/ui/Button/Button";
import Input from "./components/ui/Input/Input";
import Avatar from "./components/ui/Avatar/Avatar";
import Tooltip from "./components/ui/Tooltip/Tooltip";

function App() {
  const [name, setName] = useState("Willys Arnel");
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center gap-10">
      <h1 className="text-3xl font-bold text-slate-800">React Component Lab</h1>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center gap-4 w-full max-w-md">
        <Tooltip content="Cliquez pour changer de photo" position="top">
          <Avatar
            name={name}
            size="xl"
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Willys"
          />
        </Tooltip>

        <div className="text-center">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-slate-500 text-sm">Développeur Fullstack</p>
        </div>
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
          error={email.length > 0 && !email.includes('@') ? "Email invalide" : ""}
        />

        <Input
          label="Bio"
          type="textarea"
          placeholder="Parlez-nous de vous..."
          rows={3}
        />

        <div className="flex gap-2 mt-2">
          <Tooltip content="Sauvegarder les modifications" position="bottom">
            <Button variant="primary" className="flex-1">Enregistrer</Button>
          </Tooltip>

          <Button variant="secondary">Annuler</Button>
        </div>
      </div>

      <div className="flex gap-4 items-center bg-slate-100 p-4 rounded-lg">
        <p className="text-sm font-medium text-slate-600">Tests Fallback :</p>
        <Avatar name="Koloina Razafindratsira" size="sm" />
        <Avatar name="Tsiry Sandratraina" size="sm" src="lien-mort.jpg" />
      </div>
    </div>
  );
}

export default App;
