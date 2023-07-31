import Link from 'next/link';

import Button from '@components/common/Button';

const TestLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-fit w-full">
      {children}
      <Link href="/" replace>
        <Button>홈으로</Button>
      </Link>
    </div>
  );
};

export default TestLayout;
