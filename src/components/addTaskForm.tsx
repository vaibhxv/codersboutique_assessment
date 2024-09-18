import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"


interface AddTaskFormProps {
  onAddTask: (task: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');
  const { toast } = useToast()

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim() === '') {
      toast({
        variant: "destructive",
        title: "Uh oh! Enter a new task to add.",
        
        
      })
      return;
    }
    onAddTask(newTask);
    setNewTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex space-x-2">
        <Input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task..."
          className="flex-grow border-gray-300 focus:border-gray-500 focus:ring-gray-500"
        />
        <Button type="submit" className="bg-gray-800 hover:bg-gray-700 text-white transition-colors duration-300">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Task
        </Button>
      </div>
    </form>
  );
};

export default AddTaskForm;