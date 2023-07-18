import { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  description?: string;
  children: ReactNode;
}

const Section = ({ title, description, children }: SectionProps) => {
  return (
    <section className="flex h-auto w-full flex-col items-center justify-center border border-blue-600 text-blue-600">
      <div className=" flex w-full flex-col items-center justify-center gap-2 border-b border-blue-600 p-3">
        {title && (
          <h2 className="text-2xl font-medium shadow-blue-600 drop-shadow-lg">
            {title}
          </h2>
        )}
        {description && (
          <span className="whitespace-pre-line text-xl font-medium leading-5">
            {description}
          </span>
        )}
      </div>
      <div className="flex w-full flex-1 flex-col items-center justify-center p-3">
        {children}
      </div>
    </section>
  );
};

export default Section;
