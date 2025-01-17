import React from 'react';
import { fetchTodos } from '@/utils/api';
import Todos from '@/app/components/TodoList';

export default async function Dashboard() {
  const { todos, error } = await fetchTodos();

  return <Todos todos={todos} error={error} />;
}
