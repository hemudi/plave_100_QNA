import Link from 'next/link';

import Button from '@components/common/Button';

const HomePage = () => {
  return (
    <div className="w-full">
      <Link href="/test" replace>
        <Button size="full" variant="dark">
          테스트 하러가기
        </Button>
      </Link>
    </div>
  );
};

export default HomePage;
