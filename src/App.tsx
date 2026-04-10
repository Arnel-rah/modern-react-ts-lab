import Button from "./components/ui/Button/Button";
import { useToggle } from "./hooks/useToggle";
import Card from "./components/ui/";

const App = () => {
  const [isExpanded, toggleDetails] = useToggle (false);

  return (
    <Card className="max-w-md mx-auto mt-10">
      <Card.Header>
        <div className="flex justify-between items-center w-full">
          <span>Documentation Logicielle</span>
          <Button variant="secondary" size="sm" onClick={toggleDetails}>
            {isExpanded ? "Réduire" : "Développer"}
          </Button>
        </div>
      </Card.Header>

      {isExpanded && (
        <Card.Body>
          <p className="text-sm">
            Ce texte n'est visible que parce que le hook useToggle a basculé
            l'état <strong>isExpanded</strong> à true. C'est parfait pour les
            modales, les accordéons et les menus dropdown.
          </p>
        </Card.Body>
      )}
    </Card>
  );
};

export default App;
