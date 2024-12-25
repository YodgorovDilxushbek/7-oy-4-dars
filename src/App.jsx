import { Routes, Route, NavLink } from "react-router-dom";
import TodoApp from "./component/TodoApp.jsx";
import Copy from "./component/Copy.jsx";

function App() {
  return (
    <div className="font-sans bg-gray-100  ">
      <header className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-6 m-auto gap-10 ">
            <ul className="flex space-x-6">
              <li>
                <NavLink
                  to="/"
                  title="To Do"
                  className="text-white text-lg hover:text-gray-300"
                  activeClassName="text-yellow-500"
                >
                  To Do
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/copy"
                  className="text-white text-lg hover:text-gray-300"
                  activeClassName="text-yellow-500"
                >
                  Copy
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main className="p-8">
        <Routes>
          <Route path="/" element={<TodoApp />} />
          <Route path="/copy" element={<Copy />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
