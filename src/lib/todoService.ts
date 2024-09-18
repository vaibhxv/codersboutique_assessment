import { supabase } from './supabaseClient';

export const getTasks = async () => {
  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
};

export const addTask = async (task: string) => {
  const { data, error } = await supabase
    .from('tasks')
    .insert([{ task, status: false, created_at: new Date().toISOString() }]);

  if (error) {
    console.error(error);
  }

  return data;
};

export const updateTask = async (id: string, status: boolean) => {
  const { data, error } = await supabase
    .from('tasks')
    .update({ status })
    .eq('id', id);

  if (error) {
    console.error(error);
  }

  return data;
};

export const deleteTask = async (id: string) => {
  const { data, error } = await supabase
    .from('tasks')
    .delete()
    .eq('id', id);

  if (error) {
    console.error(error);
  }

  return data;
};

export const editTask = async (id: string, task: string) => {
  const { data, error } = await supabase
    .from('tasks')
    .update({ task })
    .eq('id', id);

  if (error) {
    console.error(error);
  }

  return data;
};