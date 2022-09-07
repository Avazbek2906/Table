import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TablePage from "./pages/TablePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<TablePage />} key="tablepage" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
