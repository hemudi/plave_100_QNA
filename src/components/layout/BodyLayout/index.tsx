import { ReactNode } from 'react';

import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import Main from '@components/layout/Main';
import Providers from '@utils/provider';

const BodyLayout = ({ children }: { children: ReactNode }) => {
  return (
    <body className="mx-auto my-2.5 flex h-fit w-1/3 min-w-fit flex-col items-center justify-start ">
      <Providers>
        <div className="flex h-fit w-full flex-col items-center justify-start overflow-hidden rounded-2xl border-2 border-black">
          <Header />
          <Main>{children}</Main>
        </div>
        <Footer />
      </Providers>
    </body>
  );
};

export default BodyLayout;
