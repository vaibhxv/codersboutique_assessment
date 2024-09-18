import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, RefreshCw, Trash, Edit, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { format, isToday, isYesterday } from 'date-fns';
import EditTaskModal from './taskModal';
import DeleteConfirmationModal from './deleteModal';

interface Task {
  id: string;
  task: string;
  status: boolean;
  created_at: string;
}

interface TaskListProps {
  tasks: Task[];
  onUpdateTask: (id: string, status: boolean) => void;
  onDeleteTask: (id: string) => void;
  onEditTask: (id: string, newTask: string) => void;
  isCompleted: boolean;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onUpdateTask, onDeleteTask, onEditTask, isCompleted }) => {
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [deletingTask, setDeletingTask] = useState<Task | null>(null);

  const handleEditClick = (task: Task) => {
    setEditingTask(task);
  };

  const handleEditSave = (editedTask: string) => {
    if (editingTask) {
      onEditTask(editingTask.id, editedTask);
    }
    setEditingTask(null);
  };

  const handleDeleteClick = (task: Task) => {
    setDeletingTask(task);
  };

  const handleDeleteConfirm = () => {
    if (deletingTask) {
      onDeleteTask(deletingTask.id);
    }
    setDeletingTask(null);
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    if (isToday(date)) {
      return `Today at ${format(date, 'h:mm a')}`;
    } else if (isYesterday(date)) {
      return `Yesterday at ${format(date, 'h:mm a')}`;
    } else {
      return format(date, 'MMM d, yyyy ');
    }
  };

  return (
    <>
      <AnimatePresence>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <motion.li
              key={task.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100"
            >
              <div className="flex flex-col mb-2 sm:mb-0">
                <span className={`text-lg font-light ${isCompleted ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                  {task.task}
                </span>
                <span className="text-xs text-gray-500 mt-1 flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {formatTimestamp(task.created_at)}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={() => onUpdateTask(task.id, !isCompleted)}
                  variant="outline"
                  className={`${
                    isCompleted
                      ? 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                      : 'bg-gray-100 text-green-700 hover:bg-gray-200 hover:text-green-800'
                  } transition-colors duration-300`}
                >
                  {isCompleted ? (
                    <RefreshCw className="mr-2 h-4 w-4" />
                  ) : (
                    <CheckCircle className="mr-2 h-4 w-4" />
                  )}
                  {isCompleted ? 'Undo' : 'Complete'}
                </Button>
                <Button
                  onClick={() => handleEditClick(task)}
                  variant="outline"
                  className="bg-gray-100 hover:bg-gray-200 text-blue-700 hover:text-blue-800 transition-colors duration-300"
                >
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                <Button
                  onClick={() => handleDeleteClick(task)}
                  variant="outline"
                  className="bg-gray-100 hover:bg-gray-200 text-red-600 hover:text-red-800 transition-colors duration-300"
                >
                  <Trash className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </div>
            </motion.li>
          ))}
        </ul>
      </AnimatePresence>
      <EditTaskModal
        isOpen={!!editingTask}
        onClose={() => setEditingTask(null)}
        onSave={handleEditSave}
        currentTask={editingTask?.task || ''}
      />
      <DeleteConfirmationModal
        isOpen={!!deletingTask}
        onClose={() => setDeletingTask(null)}
        onConfirm={handleDeleteConfirm}
        taskName={deletingTask?.task || ''}
      />
    </>
  );
};

export default TaskList;