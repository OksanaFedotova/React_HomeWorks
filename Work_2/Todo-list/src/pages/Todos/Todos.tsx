import { useGetTodosQuery } from "../../redux/todosApi";

export default function Todos() {
  const { data, error, isLoading } = useGetTodosQuery();
  return (
    <>
      <h1>Todos</h1>
      {isLoading && <p>Loading</p>}
      {error && <p>Error: {error.toString()}</p>}
      {data && (
        <ul>
          {data.todos.map((item) => (
            <li key={item.id}>{item.todo}</li>
          ))}
        </ul>
      )}
    </>
  );
}
