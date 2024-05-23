import Header from "./components/header";
import Login from "./pages/Login/index";
import Menu from "./pages/Menu/index";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu/>
      <Login/>
      <ListarTarefa />
      
    </div>
  );
}

export default App;
