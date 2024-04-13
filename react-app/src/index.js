import ReactDOM from "react-dom/client";

const response = await fetch("/api/numbers");
const numbers = await response.json();

function App() {
  return (
    <div>
      <h1>React app</h1>
      <p>Numbers fetched from the API:</p>
      {numbers.map((number) => (<p key={number}>{number}</p>))}
      <a href="/">Go back to flask app</a>
    </div>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
