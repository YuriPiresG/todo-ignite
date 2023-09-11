import { PlusCircle } from "lucide-react";
import { useState } from "react";
import EmptyTodo from "./EmptyTodo";
import { TodoCard } from "./TodoCard";
import { TodoStatus } from "./TodoStatus";

export function Form() {
  const [isComplete, setIsComplete] = useState(false);
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState<
    { task: string; isComplete: boolean }[]
  >([]);

  const [completedCount, setCompletedCount] = useState(0);
  const countMsg = completedCount + " de " + todoList.length;

  const handleComplete = (taskIndex: number) => {
    setIsComplete(!isComplete);

    if (todoList[taskIndex].isComplete) {
      setCompletedCount(completedCount - 1);
    } else {
      setCompletedCount(completedCount + 1);
    }
    setTodoList(
      todoList.map((task, index) =>
        index === taskIndex ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  const deleteTask = (taskIndex: number) => {
    setTodoList(todoList.filter((_task, index) => index !== taskIndex));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTodoList([...todoList, { task, isComplete: false }]);
          setTask("");
        }}
      >
        <input
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          placeholder="Adicione uma nova tarefa"
          className="text-gray100 w-[40rem] h-[3.375rem] bg-gray500 border border-gray700 rounded-lg absolute top-[10rem] left-[35rem]
      pl-[1rem] focus:ring-purple focus:border-purple focus:ring-4"
        />

        <button className="w-[6rem] h-[3.25rem] bg-blueDark rounded-lg absolute top-[10rem] left-[75.5rem] hover:bg-blue">
          <div className="flex gap-[0.5rem] ml-[1rem]">
            <span className="font-bold text-gray100 leading-[140%]">Criar</span>
            <PlusCircle color="white" />
          </div>
        </button>
      </form>

      <div className="flex justify-center items-center flex-col ml-[35rem] mt-[5rem] w-[46rem]">
        <TodoStatus
          todoSize={todoList.length}
          doneSize={todoList.length === 0 ? "0" : countMsg}
        />
        {todoList.length != 0 &&
          todoList.map((todo, index) => (
            <TodoCard
              content={todo.task}
              onDelete={() => deleteTask(index)}
              onComplete={() => handleComplete(index)}
              isComplete={todo.isComplete}
            />
          ))}
        {todoList.length === 0 && <EmptyTodo />}
      </div>
    </div>
  );
}
