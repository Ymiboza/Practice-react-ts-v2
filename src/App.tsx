import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import TodosItemPage from "./component/todos-item-page/todos-item-page";
import TodosPage from "./component/todos-page";
import UserItemPage from "./component/user-item-page/user-item-page";
import UserPage from "./component/user-page";

function App() {
  return (
    <Router>
      <div>
        <NavLink to="/users">Пользователи</NavLink>
        <NavLink to="/todos">Список дел</NavLink>
      </div>
      <Routes>
        <Route path={"/users"} element={<UserPage />}></Route>
        <Route path={"/todos"} element={<TodosPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
