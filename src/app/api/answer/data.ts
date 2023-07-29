import { MemberName } from 'src/types/member';

export interface Answer {
  id: number;
  name: MemberName;
  data: string;
}

export interface QNA {
  no: number;
  question: string;
  answerList: Answer[];
}

const questionList: QNA[] = [
  {
    no: 1,
    question: '이름',
    answerList: [
      {
        id: 1,
        name: 'yejun',
        data: '남예준',
      },
      {
        id: 2,
        name: 'noah',
        data: '한노아',
      },
      {
        id: 3,
        name: 'bamby',
        data: '채봉구',
      },
      {
        id: 4,
        name: 'eunho',
        data: '도은호',
      },
      {
        id: 5,
        name: 'hamin',
        data: '유하민',
      },
    ],
  },
  {
    no: 2,
    question: '생년월일',
    answerList: [
      {
        id: 1,
        name: 'yejun',
        data: '010912',
      },
      {
        id: 2,
        name: 'noah',
        data: '01년생 2월 10일',
      },
      {
        id: 3,
        name: 'bamby',
        data: '020715',
      },
      {
        id: 4,
        name: 'eunho',
        data: '030524',
      },
      {
        id: 5,
        name: 'hamin',
        data: '물음표✕4 11월 1일!',
      },
    ],
  },
  {
    no: 3,
    question: '키',
    answerList: [
      {
        id: 1,
        name: 'yejun',
        data: '183',
      },
      {
        id: 2,
        name: 'noah',
        data: '칠구!',
      },
      {
        id: 3,
        name: 'bamby',
        data: '82?',
      },
      {
        id: 4,
        name: 'eunho',
        data: '184',
      },
      {
        id: 5,
        name: 'hamin',
        data: '185',
      },
    ],
  },
  {
    no: 4,
    question: '혈액형',
    answerList: [
      {
        id: 1,
        name: 'yejun',
        data: 'B형',
      },
      {
        id: 2,
        name: 'noah',
        data: 'O형',
      },
      {
        id: 3,
        name: 'bamby',
        data: 'HO~',
      },
      {
        id: 4,
        name: 'eunho',
        data: 'A',
      },
      {
        id: 5,
        name: 'hamin',
        data: 'AB형!',
      },
    ],
  },
  {
    no: 5,
    question: '별명',
    answerList: [
      {
        id: 1,
        name: 'yejun',
        data: '남갱갱',
      },
      {
        id: 2,
        name: 'noah',
        data: '치즈',
      },
      {
        id: 3,
        name: 'bamby',
        data: '방귀',
      },
      {
        id: 4,
        name: 'eunho',
        data: '실버호! 두윤노!',
      },
      {
        id: 5,
        name: 'hamin',
        data: '유잼민?',
      },
    ],
  },
  {
    no: 6,
    question: '요즘 가장 하고 싶은 것',
    answerList: [
      {
        id: 1,
        name: 'yejun',
        data: '무대',
      },
      {
        id: 2,
        name: 'noah',
        data: '헬스!',
      },
      {
        id: 3,
        name: 'bamby',
        data: '에어컨 트는 거',
      },
      {
        id: 4,
        name: 'eunho',
        data: '앨범 또 내고싶어요',
      },
      { id: 5, name: 'hamin', data: '운동' },
    ],
  },
  {
    no: 7,
    question: '지금 바로 보고 싶은 사람',
    answerList: [
      { id: 1, name: 'yejun', data: '유! 하! 미인!' },
      { id: 2, name: 'noah', data: '플리!' },
      { id: 3, name: 'bamby', data: '플릐~' },
      { id: 4, name: 'eunho', data: '남예주우운!' },
      { id: 5, name: 'hamin', data: '멤버들' },
    ],
  },
  {
    no: 8,
    question: '취미',
    answerList: [
      { id: 1, name: 'yejun', data: '커피 마시기' },
      { id: 2, name: 'noah', data: '헬스' },
      { id: 3, name: 'bamby', data: '사색' },
      { id: 4, name: 'eunho', data: '운동' },
      { id: 5, name: 'hamin', data: '슬로오우~ 헬스' },
    ],
  },
];

export default questionList;
