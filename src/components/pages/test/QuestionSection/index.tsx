import { ReactNode } from 'react';

interface QuestionSectionProps {
  title?: string;
  description?: string;
  children: ReactNode;
}

const QuestionSection = ({
  title,
  description,
  children,
}: QuestionSectionProps) => {
  return (
    <section className="flex h-auto w-full flex-col items-center justify-center border-2 border-black text-blue-600 ">
      <div className=" flex w-full flex-col items-center justify-center gap-3 border-b-2 border-black p-3">
        {title && (
          <h2 className="text-2xl font-medium shadow-blue-600 drop-shadow-lg">
            {title}
          </h2>
        )}
        {description && (
          <span className="whitespace-pre-line text-xl font-medium leading-5">
            {`" ${description} "`}
          </span>
        )}
      </div>
      <div className="flex w-full flex-1 flex-col items-center justify-center p-3">
        {children}
      </div>
    </section>
  );
};

export default QuestionSection;
