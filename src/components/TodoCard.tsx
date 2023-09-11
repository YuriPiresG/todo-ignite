import { Trash2 } from "lucide-react";

interface TodoCardProps {
  content: string;
  onDelete: () => void;
  onComplete: () => void;
  isComplete: boolean;
}

export function TodoCard({
  content,
  onDelete,
  onComplete,
  isComplete,
}: TodoCardProps) {
  return (
    <>
      <div className="w-[46rem] h-[4.5rem] bg-gray500 flex items-center gap-[.75rem] rounded-lg border border-gray400 mb-[.75rem]">
        <div className="mb-[.7rem]">
          <button
            onClick={onComplete}
            className={`border-[.15rem] ml-[1rem]  border-blue w-[1.2rem] h-[1.2rem] rounded-[50%]  ${
              isComplete
                ? "border-purpleDark bg-purpleDark hover:bg-purple hover:border-purple"
                : "hover:bg-blueDark hover:bg-opacity-25 hover:border-blueDark"
            }`}
          >
            {isComplete && (
              <div className="flex justify-center items-center">
                <span className="text-gray100 font-bold text-[.75rem]">✓</span>
              </div>
            )}
          </button>
        </div>
        <h1
          className={`text-gray100 text-[.875rem] font-normal leading-[140%] w-[40rem] ${
            isComplete ? "line-through text-gray300" : ""
          }`}
        >
          {content}
        </h1>
        <button onClick={onDelete} className="mb-[2rem]">
          <Trash2
            color="gray"
            size={18}
            className="hover:stroke-danger hover:bg-gray400 rounded-[.25rem] h-[1.5rem] w-[1.5rem] p-[.24rem]"
          />
        </button>
      </div>
    </>
  );
}
