import MemberIcon from '@components/common/MemberIcon';
import TypingLabel from '@components/pages/test/TypingLabel';

interface MemberReply {
  name: 'yejun' | 'noah' | 'bamby' | 'eunho' | 'hamin';
  reply: string;
}

const MemberReply = ({ name, reply }: MemberReply) => {
  return (
    <div className="flex h-fit w-full select-none items-center justify-center gap-3">
      <MemberIcon type={name} />
      <div className="relative flex h-fit flex-1 items-center justify-center rounded-lg border-2 border-blue-950 bg-blue-100 p-2">
        <TypingLabel text={reply} color="blue" />
        <div className="absolute -left-px h-2 w-2 -translate-x-1/2 rotate-45 transform border-b-2 border-l-2 border-blue-950 bg-blue-100"></div>
      </div>
    </div>
  );
};

export default MemberReply;
