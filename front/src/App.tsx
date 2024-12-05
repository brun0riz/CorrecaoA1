import React from 'react';
import ListarTarefas from "./components/listarTarefas";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import ListarTarefasConcluidas from "./components/listarTarefasConcluidas";
import ListarTarefasNaoConcluidas from "./components/listarTarefasNaoConluidas";
import CadastrarTarefa from "./components/cadastrarTarefa";

function App() {
  return (
      <div id="app">
          <BrowserRouter>
              <nav>
                  <ul>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to={"/pages/tarefas/listar"}>
                              Listar Tarefas{" "}
                          </Link>
                      </li>
                      <li>
                          <Link to={"/pages/tarefas/listar/concluidas"}>
                              Listar Tarefas Concluidas{" "}
                          </Link>
                      </li>
                      <li>
                          <Link to={"/pages/tarefas/listar/naoconcluidas"}>
                              Listar Tarefas Não Concluidas{" "}
                          </Link>
                      </li>
                      <li>
                          <Link to={"/pages/tarefas/cadastrar"}>
                              Cadastrar tarefas{" "}
                          </Link>
                      </li>
                  </ul>
              </nav>
              <Routes>
                  <Route path="/" element={<ListarTarefas/>}/>
                  <Route path="/pages/tarefas/listar" element={<ListarTarefas/>}/>
                  <Route path="/pages/tarefas/listar/concluidas" element={<ListarTarefasConcluidas/>}/>
                  <Route path="/pages/tarefas/listar/naoconcluidas" element={<ListarTarefasNaoConcluidas/>}/>
                  <Route path="/pages/tarefas/cadastrar" element={<CadastrarTarefa />}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
