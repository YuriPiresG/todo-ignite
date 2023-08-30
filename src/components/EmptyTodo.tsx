import clipboardIcon from "../assets/Clipboard.png";
export default function EmptyTodo() {
  return (
    <>
      <div className="flex justify-center items-center flex-col w-[46rem] h-[16rem] border-t border-gray400 rounded-[.5rem]">
        <img src={clipboardIcon} alt="Clipboard task" className="mb-[1rem]" />
        <p className="text-gray300 font-bold text-[1rem] leading-[140%]">Você ainda não tem tarefas cadastradas</p>
        <p className="text-gray300 font-thin text-[1rem] leading-[140%]">Crie tarefas e organize seus itens a fazer</p>
      </div>
    </>
  );
}
