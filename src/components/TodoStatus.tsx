interface TodoStatusProps {
  todoSize: number;
  doneSize: string | number;

}

export function TodoStatus({ todoSize, doneSize }: TodoStatusProps) {
  return (
    <>
      <div className="flex justify-between w-[46rem] mb-[1.56rem]">
        <div className="flex gap-[.875rem]">
          <p className="text-blue font-bold text-[.875rem]">Tarefas criadas</p>
          <span className="bg-gray400 rounded-[62rem] w-[1.6rem] text-center text-gray100 ">
            {todoSize}
          </span>
        </div>

        <div className="flex gap-[.5rem]">
          <p className="text-purple font-bold text-[.875rem]">Concluídas</p>
          <span className="bg-gray400 rounded-[62rem] w-[3.25rem] text-center text-gray100">
            {doneSize}
          </span>
        </div>
      </div>
    </>
  );
}
