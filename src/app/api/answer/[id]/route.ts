import { NextRequest, NextResponse } from 'next/server';

import questionList from '@app/api/answer/data';

export async function GET(
  _: NextRequest,
  { params }: { params: { id: number } },
) {
  try {
    const questionNo = params.id;
    const answerData = questionList?.[questionNo];

    if (!answerData) {
      return NextResponse.json(
        { error: '[BAD REQUEST] Invalid Question Number' },
        { status: 400 },
      );
    }

    return NextResponse.json({ data: answerData }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { error: '[INTERNAL SERVER ERROR]' },
      { status: 500 },
    );
  }
}
