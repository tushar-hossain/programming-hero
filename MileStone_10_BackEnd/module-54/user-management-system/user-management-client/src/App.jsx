import "./App.css";
import Users from "./components/Users";

const userPromise = fetch("http://localhost:3000/users").then((res) =>
  res.json()
);

function App() {
  return (
    <>
      <h1>Users Management System</h1>
      <Users userPromise={userPromise} />
    </>
  );
}

export default App;
