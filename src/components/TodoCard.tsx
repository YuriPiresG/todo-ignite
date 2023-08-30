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
            className={`border-[.15rem] ml-[1rem]  border-blue w-[1.2rem] h-[1.2rem] rounded-[50%] ${
              isComplete ? "line-through" : ""
            }`}
          />
        </div>
        <h1
          className={`text-gray100 text-[.875rem] font-normal leading-[140%] w-[40rem] ${
            isComplete ? "line-through" : ""
          }`}
        >
          {content}
        </h1>
        <button onClick={onDelete} className="mb-[2rem]">
          <Trash2 color="gray" size={18} />
        </button>
      </div>
    </>
  );
}
