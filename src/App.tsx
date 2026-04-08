import Button from "./components/ui/Button/Button";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind CSS!</h1>
      <Button variant="danger" size="lg" className="ml-4">
        Primary
      </Button>
    </div>
  );
};

export default App;
