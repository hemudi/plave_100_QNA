const HEADER_TITLE = '플레이브 100문 100답';

const Header = () => {
  return (
    <header className="flex h-11 w-full select-none items-center justify-center rounded-t-2xl bg-neutral-100 px-4">
      <div className="flex items-center gap-1">
        <div className="h-3 w-3 rounded-xl bg-red-500/80" />
        <div className="h-3 w-3 rounded-xl bg-yellow-500/80" />
        <div className="h-3 w-3 rounded-xl bg-green-500/80" />
      </div>
      <div className="flex grow justify-center">
        <h1>{HEADER_TITLE}</h1>
      </div>
    </header>
  );
};

export default Header;
