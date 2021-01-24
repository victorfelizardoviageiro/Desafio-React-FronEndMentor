import crossicon from './images/icon-cross.svg';
function TodoList(){
    return(
        <div className="container">
            <article className="box">
                <div className="box-icon"></div>
                <div className="box-content">
                <p>Comer Bolo</p>
                </div>
            </article>
            <article className="box box--checked">
                <div className="box-icon"></div>
                <div className="box-content">
                <p>Comer Bolo</p>
                </div>
            </article>
            <article className="box box--checked">
                <div className="box-icon"></div>
                <div className="box-content">
                <p>Comer Bolo</p>
                <p><img src={crossicon} alt="Apagar" /></p>
                </div>
            </article>
            <article className="box">
                <div className="box-content">
                <p>5 restantes</p>
                <div className="centered-text">
                    <p className="centered-text--active">Todos</p>
                    <p>Activos</p>
                    <p>Competados</p>
                </div>
                <p>Apagar Completos</p>
                </div>
            </article>
        </div>
    )
}
export default TodoList;