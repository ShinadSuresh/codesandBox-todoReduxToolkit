import Todo from "./components/Home";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Edit } from "./components/Edit";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
