const HEADER_TITLE = '플레이브 100문 100답';

const Header = () => {
  return (
    <header className="flex justify-center items-center w-full h-11 px-4 rounded-t-2xl bg-neutral-100 select-none">
      <div className="flex items-center gap-1">
        <div className="w-3 h-3 rounded-xl bg-red-500" />
        <div className="w-3 h-3 rounded-xl bg-yellow-500" />
        <div className="w-3 h-3 rounded-xl bg-green-500" />
      </div>
      <div className="flex justify-center grow">
        <h1>{HEADER_TITLE}</h1>
      </div>
    </header>
  );
};

export default Header;
