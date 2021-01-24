import crossicon from './images/icon-cross.svg';
function TodoList({data,restantes,completeTodo,deleteTodo,filtrar,filtrarStatus,apagarCompletos}){



    /*function showActives(){
        const tempTarefastate = tarefa.filter((tarefa)=>tarefa.completed===false);
        console.log(tempTarefastate);
    }*/
    return(
        <div className="container">
            {
                data.map((tarefa)=>{
                    return(
                        <article key={tarefa.id} className={tarefa.completed?"box box--checked":"box"}>
                            <div onClick={()=>completeTodo(tarefa.id)} className="box-icon"></div>
                            <div className="box-content">
                            <p>{tarefa.tarefa}</p>
                            <p onClick={()=>deleteTodo(tarefa.id)} className="delete"><img src={crossicon} alt="Apagar" /></p>
                            </div>
                        </article>
                    )
                })
            }
            
            <article className="box">
                <div className="box-content">
                <p>{restantes} restantes</p>
                <div className="centered-text">
                    <p onClick={()=>filtrar({status:false,mode:""})} className={filtrarStatus.mode===""?"centered-text--active":""}>Todos</p>
                    <p onClick={()=>filtrar({status:true,mode:false})} className={filtrarStatus.mode===false?"centered-text--active":""}>Activos</p>
                    <p onClick={()=>filtrar({status:true,mode:true})} className={filtrarStatus.mode===true?"centered-text--active":""}>Competados</p>
                </div>
                <p onClick={apagarCompletos}>Apagar Completos</p>
                </div>
            </article>
        </div>
    )
}
export default TodoList;