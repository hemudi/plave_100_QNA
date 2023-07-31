'use client';

import { useState } from 'react';

import Button from '@components/common/Button';
import TextField from '@components/common/TextField';
import MemberAnswer from '@components/pages/test/MemberAnswer';
import ProgressBar from '@components/pages/test/ProgressBar';
import QuestionSection from '@components/pages/test/QuestionSection';
import { useQna } from 'src/apis/qna/queries';

const TestPage = () => {
  const [questionNo, setQuestionNo] = useState<number>(0);
  const { data: questionData } = useQna(questionNo);

  return (
    <div className="flex w-full flex-col gap-4 p-4">
      <ProgressBar percentage={questionData?.no} />
      <QuestionSection
        title={`Q.${questionData?.no}`}
        description={questionData?.question}
      >
        <div className="flex w-full flex-col gap-2">
          {questionData?.answerList?.map(({ id, name, data }) => (
            <MemberAnswer
              key={`${questionData?.no} - ${id}`}
              name={name}
              answer={data}
            />
          ))}
        </div>
      </QuestionSection>
      <div className="flex w-full gap-2">
        <TextField maxLength={30} placeholder="답 입력 후 Next 버튼 클릭" />
        <Button
          variant="dark"
          size="small"
          shape="rounded"
          onClick={() => setQuestionNo((prev) => ++prev)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default TestPage;
