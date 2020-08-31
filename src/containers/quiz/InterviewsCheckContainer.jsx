import React from 'react';

import { useSelector } from 'react-redux';

import _ from 'lodash';

import { useHistory } from 'react-router-dom';

import { get } from '../../modules/utils';

import InterviewsLayout from '../../layout/InterviewsLayout';
import QuizErrorMessage from '../../components/quiz/QuizErrorMessage';

import InterviewsCheck from '../../components/quiz/InterviewsCheck';

const InterviewsCheckContainer = () => {
  const history = useHistory();
  const { problems } = useSelector(get('quiz'));

  const handleMoveInterviewsPage = () => {
    history.push('/interviews');
  };

  if (_.isEmpty(problems)) {
    return (
      <InterviewsLayout>
        <QuizErrorMessage />
      </InterviewsLayout>
    );
  }

  return (
    <>
      <InterviewsCheck onMoveInterviewsPage={handleMoveInterviewsPage} problems={problems} />
    </>
  );
};

export default InterviewsCheckContainer;
