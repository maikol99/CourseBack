import { useToast } from '@/hooks/use-toast';
import axios from 'axios';
import React, { useState } from 'react'
import Navbar from './Navbar';
import { Button } from '@/components/ui/Button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input'; // ✅ Ruta correcta

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const toast = useToast();

  const addTodoHandler = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/v1/todo", { title,description }, {
        headers: { // ✅ en minúscula
          'Content-Type': 'application/json'
        },
        withCredentials: true,
      });
      console.log(res)
      if(res.data.success){ // ✅ probablemente es res.data.success
        toast.success(res.data.message);
      }
    } catch (error) {
        console.log(error)
    }
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
  )
}

export default Home;
