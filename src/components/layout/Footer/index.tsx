const AUTHOR_NICKNAME = '해삼스무디';

const Footer = () => {
  return (
    <footer className="flex h-14 w-full select-none items-center justify-center text-xs text-slate-500">
      <span>{`Created By. ${AUTHOR_NICKNAME}`}</span>
    </footer>
  );
};

export default Footer;
