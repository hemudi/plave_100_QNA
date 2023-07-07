import { ReactNode } from 'react';

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex h-full w-full items-center justify-center bg-amber-50 p-2.5">
      {children}
    </main>
  );
};

export default Main;
