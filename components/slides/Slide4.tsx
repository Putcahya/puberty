
import React, { useState, useRef, useEffect } from 'react';
import SlideContainer from '../SlideContainer';
import Fireworks from '../Fireworks';
import { quizQuestions } from '../../constants/content';

type AnswerState = 'unanswered' | 'correct' | 'incorrect';

const Slide4: React.FC = () => {
  // Audio files should be placed in `public/sounds/` (see README below)
  const correctSoundPath = '/sounds/correct.mp3';
  const incorrectSoundPath = '/sounds/incorrect.mp3';
  const finishSoundPath = '/sounds/finish.mp3';

  const correctAudioRef = useRef<HTMLAudioElement | null>(null);
  const incorrectAudioRef = useRef<HTMLAudioElement | null>(null);
  const finishAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio objects once
    correctAudioRef.current = new Audio(correctSoundPath);
    incorrectAudioRef.current = new Audio(incorrectSoundPath);
    finishAudioRef.current = new Audio(finishSoundPath);

    // Optional: set volume defaults
    correctAudioRef.current.volume = 0.9;
    incorrectAudioRef.current.volume = 1;
    finishAudioRef.current.volume = 0.9;
  }, []);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answerState, setAnswerState] = useState<AnswerState>('unanswered');
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isFinished = currentQuestionIndex >= quizQuestions.length;

  // Play finish sound when quiz becomes finished. Keep hooks at top level.
  useEffect(() => {
    if (!isFinished) return;
    if (finishAudioRef.current) {
      finishAudioRef.current.currentTime = 0;
      finishAudioRef.current.play().catch(() => {});
    }
  }, [isFinished]);

  const handleAnswer = (userAnswer: boolean) => {
    if (answerState !== 'unanswered') return;

    if (userAnswer === currentQuestion.isTrue) {
      setScore(score + 1);
      setAnswerState('correct');
      // play correct sound (user gesture present)
      if (correctAudioRef.current) {
        correctAudioRef.current.currentTime = 0;
        correctAudioRef.current.play().catch(() => {});
      }
    } else {
      setAnswerState('incorrect');
      // play incorrect sound
      if (incorrectAudioRef.current) {
        incorrectAudioRef.current.currentTime = 0;
        incorrectAudioRef.current.play().catch(() => {});
      }
    }
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setAnswerState('unanswered');
    setShowExplanation(false);
  };
  
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswerState('unanswered');
    setShowExplanation(false);
  };

  const getBorderColor = () => {
    if (answerState === 'correct') return 'border-green-500';
    if (answerState === 'incorrect') return 'border-red-500';
    return 'border-gray-300';
  };

  if (isFinished) {
    return (
      <SlideContainer>
        <div className="relative text-center flex flex-col justify-center items-center h-full">
          <Fireworks active={true} />
          <h2 className="text-3xl font-bold text-brand-primary mb-4">Quiz Selesai!</h2>
          <p className="text-xl text-brand-dark mb-2">Skor Kamu:</p>
          <p className="text-5xl font-bold text-brand-secondary mb-8">{score} / {quizQuestions.length}</p>
          <button
            onClick={restartQuiz}
            className="px-8 py-3 bg-brand-primary text-white font-semibold rounded-lg shadow-md hover:bg-brand-primary/90 transition-colors"
          >
            Ulangi Quiz
          </button>
        </div>
      </SlideContainer>
    );
  }

  return (
    <SlideContainer>
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl font-bold text-brand-primary mb-4 text-center">Game Benar atau Salah</h2>
        <p className="text-center text-gray-500 mb-2">Pertanyaan {currentQuestionIndex + 1} dari {quizQuestions.length}</p>
        <div className={`w-full max-w-2xl p-8 bg-white rounded-xl shadow-lg border-t-4 ${getBorderColor()} transition-colors duration-300 mb-6`}>
          <p className="text-xl text-center text-brand-text font-semibold">{currentQuestion.question}</p>
        </div>
        
        {answerState === 'unanswered' && (
          <div className="flex gap-4">
            <button
              onClick={() => handleAnswer(true)}
              className="px-10 py-4 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition-transform transform hover:scale-105"
            >
              BENAR
            </button>
            <button
              onClick={() => handleAnswer(false)}
              className="px-10 py-4 bg-red-500 text-white font-bold rounded-lg shadow-md hover:bg-red-600 transition-transform transform hover:scale-105"
            >
              SALAH
            </button>
          </div>
        )}

        {showExplanation && (
          <div className="w-full max-w-2xl text-center animate-fade-in-up">
            <div className={`p-4 rounded-lg mb-4 ${answerState === 'correct' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              <p className="font-bold text-lg">
                {answerState === 'correct' ? 'Jawaban Kamu Benar!' : 'Jawaban Kamu Salah!'}
              </p>
              {currentQuestion.explanation && (
                <p>{currentQuestion.explanation}</p>
              )}
            </div>
            <button
              onClick={handleNextQuestion}
              className="px-8 py-3 bg-brand-primary text-white font-semibold rounded-lg shadow-md hover:bg-brand-primary/90 transition-colors"
            >
              Lanjut
            </button>
          </div>
        )}
      </div>
    </SlideContainer>
  );
};

export default Slide4;
