const AUTHOR_NICKNAME = 'Heasam Smoothie';

const Footer = () => {
  return (
    <footer className="flex h-14 w-full select-none items-center justify-center text-sm text-slate-400">
      <span>{`Created By. ${AUTHOR_NICKNAME}`}</span>
    </footer>
  );
};

export default Footer;
