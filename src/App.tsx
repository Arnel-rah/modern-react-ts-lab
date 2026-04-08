import Button from "./components/ui/Button/Button";
import Input from "./components/ui/Input/Input";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind CSS!</h1>
      <Button variant="danger" size="lg" className="ml-4">
        Primary
      </Button>

      <Input type="password" label="Password" placeholder="Votre mot de passe" error="Le mot de passe est requis"/>
      <Input type="password" label="Confirm Password" placeholder="Confirmez votre mot de passe" error="Les mots de passe ne correspondent pas"/>
    </div>
  );
};

export default App;
