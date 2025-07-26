import { useState } from "react";
import { Button } from "./components/ui/Button";
import Navbar from "./pages/Navbar";
import { Input } from "./components/ui/input";
import "./App.css";
import { Textarea } from "./components/ui/textarea";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodoHandler = () =>{
    console.log(title,description);
  }

  return (
    <div>
      <Navbar />
      <div className="flex items-center gap-5 mt-5">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Agregar nueva tarea..."
          className="w-1/4 mt-2"
        />
        <Button onClick={addTodoHandler}>Agregar Tarea 🚀</Button>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Agregar descripcion..."
            className="w-1/4 mt-2"
          />
      </div>
    </div>
  );
}

export default App;
