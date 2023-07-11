import { useEffect, useState } from 'react';

import useInterval from '@hooks/useInterval';

interface TypingLabelProps {
  text: string;
  speed?: number;
  color?: keyof typeof colors;
}

const colors = {
  inherit: 'text-inherit',
  blue: 'text-blue-600',
  purple: 'text-purple-600',
  pink: 'text-pink-600',
  red: 'text-red-600',
  green: 'text-green-600',
  black: 'text-black',
};

const TypingLabel = ({
  text,
  speed = 100,
  color = 'inherit',
}: TypingLabelProps) => {
  const [renderText, setRenderText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);
  const [isStop, setIsStop] = useState<boolean>(false);

  useEffect(() => {
    if (isStop) return;
    setRenderText((prev) => (prev || '') + text[index]);
  }, [index, text, isStop]);

  useEffect(() => {
    setIsStop(() => text.length <= index || text.length <= 0);
  }, [index, text]);

  useInterval(() => !isStop && setIndex((prev) => ++prev), speed, isStop);

  return (
    <label className={`${colors[color]}`}>
      {renderText}
      {!isStop && <span>|</span>}
    </label>
  );
};

export default TypingLabel;
