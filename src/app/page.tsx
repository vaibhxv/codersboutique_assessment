'use client'
import React from 'react';
import { useEffect, useState } from 'react';
import { getTasks, addTask, updateTask, deleteTask, editTask } from '../lib/todoService';
import { useToast } from "@/hooks/use-toast"
import TaskList from '@/components/taskList';
import AddTaskForm from '@/components/addTaskForm';
import Navbar from '@/components/navbar';

interface Task {
  id: string;
  task: string;
  status: boolean;
  created_at: string;
}

export default function Home() {
  const [activeTasks, setActiveTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const { toast } = useToast()

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async (): Promise<void> => {
    const taskList: Task[] = await getTasks();
    setActiveTasks(taskList.filter(task => !task.status));
    setCompletedTasks(taskList.filter(task => task.status));
  };

  const handleAddTask = async (newTask: string) => {
    if (newTask.trim()) {
      await addTask(newTask);
      loadTasks();
      toast({
        title: "Task Added Successfully!",
        description: "Your new task has been added to the list.",
      });
    }
  };

  const handleUpdateTask = async (id: string, status: boolean): Promise<void> => {
    await updateTask(id, status);
    if (status) {
      // Move to completed list
      const taskToMove = activeTasks.find(task => task.id === id);
      if (taskToMove) {
        setActiveTasks((prev: Task[]) => prev.filter(task => task.id !== id));
        setCompletedTasks((prev: Task[]) => [...prev, { ...taskToMove, status: true }]);
      }
    } else {
      // Move back to active list
      const taskToMove = completedTasks.find(task => task.id === id);
      if (taskToMove) {
        setCompletedTasks((prev: Task[]) => prev.filter(task => task.id !== id));
        setActiveTasks((prev: Task[]) => [...prev, { ...taskToMove, status: false }]);
      }
    }
  };

  const handleDeleteTask = async (id: string, isCompleted: boolean): Promise<void> => {
    await deleteTask(id);
    if (isCompleted) {
      setCompletedTasks((prev: Task[]) => prev.filter(task => task.id !== id));
    } else {
      setActiveTasks((prev: Task[]) => prev.filter(task => task.id !== id));
    }
    toast({
      variant: "destructive",
      title: "Task Deleted",
      description: "The task has been removed from your list.",
    });
  };

  const handleEditTask = async (id: string, newTask: string): Promise<void> => {
    await editTask(id, newTask);
    const updatedTask = { ...activeTasks.find(task => task.id === id), task: newTask } as Task;
    setActiveTasks((prev: Task[]) => prev.map(task => task.id === id ? updatedTask : task));
    setCompletedTasks((prev: Task[]) => prev.map(task => task.id === id ? updatedTask : task));
    toast({
      title: "Task Updated",
      description: "Your task has been successfully updated.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200">
    <Navbar />
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden mb-4"> {/* Reduced mb-8 to mb-4 */}
        <div className="p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 font-serif">Today's Tasks</h1>
          <AddTaskForm onAddTask={handleAddTask} />
          <TaskList
            tasks={activeTasks}
            onUpdateTask={handleUpdateTask}
            onDeleteTask={(id: string) => handleDeleteTask(id, false)}
            onEditTask={handleEditTask}
            isCompleted={false}
          />
        </div>
      </div>
      
      <div className="bg-white shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden mt-4"> {/* Added mt-4 to reduce gap */}
        <div className="p-6 sm:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 font-serif">Completed Tasks</h2> {/* Removed mt-12 */}
          <TaskList
            tasks={completedTasks}
            onUpdateTask={handleUpdateTask}
            onDeleteTask={(id: string) => handleDeleteTask(id, true)}
            onEditTask={handleEditTask}
            isCompleted={true}
          />
        </div>
      </div>
    </div>
  </div>
  
  );
}