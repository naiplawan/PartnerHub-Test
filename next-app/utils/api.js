export async function fetchTodos() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const todos = await res.json();
    return { todos };
  } catch (error) {
    return { error: error.message };
  }
}
