import Image from 'next/image';

interface MemberIconProps {
  type: 'yejun' | 'noah' | 'bamby' | 'eunho' | 'hamin';
  size?: keyof typeof ICON_SIZE;
}

const ICON_SIZE = {
  small: {
    width: 50,
    height: 50,
  },
  medium: {
    width: 100,
    height: 100,
  },
  large: {
    width: 200,
    height: 200,
  },
};

const ICON_SRC = {
  yejun: '/assets/images/ic_yejun.png',
  noah: '/assets/images/ic_noah.png',
  bamby: '/assets/images/ic_bamby.png',
  eunho: '/assets/images/ic_eunho.png',
  hamin: '/assets/images/ic_hamin.png',
};

const MemberIcon = ({ type, size = 'small' }: MemberIconProps) => {
  return (
    <Image
      className=" h-full rounded-full border border-black"
      src={ICON_SRC[type]}
      alt={type}
      width={ICON_SIZE[size].width}
      height={ICON_SIZE[size].height}
    />
  );
};

export default MemberIcon;
