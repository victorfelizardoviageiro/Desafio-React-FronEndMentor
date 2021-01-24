import {useState,useEffect} from 'react';
import TodoList from './TodoList';
import './scss/main.css';
import sunicon from './images/icon-sun.svg';

function App() {
  const [filtrado,setFiltado] = useState({data:[],restantes:0});
  const [tarefas,setTarefas] = useState([]);
  const [isFitred,setIsFiltred] = useState({status:false,mode:""});
  const [tarefaIn,setTarefaIn] = useState("");

  function apagarCompletos(){
    const temp = tarefas.filter((tarefa)=>tarefa.completed===false);
    setTarefas(temp);
  }
  useEffect(()=>{
    const tarefasMem = JSON.parse(localStorage.getItem("tarefas"));
    setTarefas(tarefasMem);
  },[]);


  useEffect(()=>{
    const restantes = tarefas.filter((t)=>t.completed===false);
    const numRestante = restantes.length;
    if(isFitred.status===true){
      const temp = tarefas.filter((t)=>t.completed===isFitred.mode);
      setFiltado({data:temp,restantes:numRestante});
    }else{
      setFiltado({data:tarefas,restantes:numRestante});
    }
  },[tarefas,isFitred]);
  //USE EFFECT FOR FILTER TASKS!!!

  useEffect(() => {
    const ordered = tarefas.sort((a,b)=>(b.order-a.order));
    localStorage.setItem('tarefas',JSON.stringify(ordered));
  },[tarefas]);
  function completeTodo(id){
    const tempTarefa = tarefas.map((tarefa)=>{
      if(tarefa.id === id&&tarefa.completed){
        return {...tarefa,completed:false}
      }else{
        if(tarefa.id === id){
          return {...tarefa,completed:true}
        }
      }
      return tarefa;
    })
    setTarefas(tempTarefa);
  }

  function deleteTodo(id){
    const tempTarefa = tarefas.filter((tarefa)=>tarefa.id!==id);
    setTarefas(tempTarefa);

  }
  function handleSubmit(e){
    e.preventDefault();
    if(tarefaIn){
      const novaTarefa = {id:Date.now(),order:tarefas.length+1,tarefa:tarefaIn,completed:false}
      setTarefaIn("");
      setTarefas([novaTarefa,...tarefas]);
    }
  }
  
  return (
    <section className="todo">
      <div className="todo-top">
        <div className="container">
          <div className="title">
            <h1>Tarefas</h1>
            <img src={sunicon} alt=""/>
          </div>
          <div className="box">
            <div className="box-icon"></div>
            <div className="box-content">
              <form onSubmit={handleSubmit} className="input-form">
                <input onChange={(e) =>setTarefaIn(e.target.value)} value={tarefaIn} placeholder="Inserir nova Tarefa..." type="text" name="" id=""/>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="todo-bottom">
        <TodoList {...filtrado} apagarCompletos={apagarCompletos} filtrarStatus={isFitred} filtrar={setIsFiltred} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
      </div>
    </section>
  );
}

export default App;
