import { useQuery } from '@tanstack/react-query';

import { QNA } from '@app/api/answer/data';
import { getQNA } from 'src/apis/qna';

const queryKeys = {
  base: ['qna'] as const,
  data: (no: number) => [queryKeys.base, no] as const,
};

export const useQna = (no: number) =>
  useQuery(queryKeys.data(no), () => getQNA(no), {
    staleTime: 50000,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    useErrorBoundary: true,
    suspense: true,
    select: (data: { data: QNA }) => data.data,
  });
