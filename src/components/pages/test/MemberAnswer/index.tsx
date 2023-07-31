import MemberIcon from '@components/common/MemberIcon';
import TypingLabel from '@components/pages/test/TypingLabel';

interface MemberAnswerProps {
  name: 'yejun' | 'noah' | 'bamby' | 'eunho' | 'hamin';
  answer: string;
}

const MemberAnswer = ({ name, answer }: MemberAnswerProps) => {
  return (
    <div className="flex h-fit w-full select-none items-center justify-center gap-3">
      <MemberIcon type={name} />
      <div
        className={`relative flex h-fit flex-1 items-center justify-center rounded-lg border-2 border-black p-2 ${LABEL_STYLE[name].background}`}
      >
        <TypingLabel text={answer} color={LABEL_STYLE[name].text} speed={80} />
        <div className="absolute -left-px h-2 w-2 -translate-x-1/2 rotate-45 transform border-b-2 border-l-2 border-black bg-blue-100"></div>
      </div>
    </div>
  );
};

interface LabelStyle {
  [key: string]: {
    text: 'blue' | 'purple' | 'pink' | 'red' | 'black';
    background: string;
  };
}

const LABEL_STYLE: LabelStyle = {
  yejun: {
    text: 'blue',
    background: 'bg-blue-100',
  },
  noah: {
    text: 'purple',
    background: 'bg-purple-100',
  },
  bamby: {
    text: 'pink',
    background: 'bg-pink-100',
  },
  eunho: {
    text: 'red',
    background: 'bg-red-100',
  },
  hamin: {
    text: 'black',
    background: 'bg-slate-100',
  },
};

export default MemberAnswer;
