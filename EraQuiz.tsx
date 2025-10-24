import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Sparkles, ArrowRight, RotateCcw } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: {
    value: string;
    label: string;
    era: string;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: 'Choose your ideal mode of transportation:',
    options: [
      { value: 'a', label: 'Steam locomotive', era: '1920s' },
      { value: 'b', label: 'Classic roadster', era: '1950s' },
      { value: 'c', label: 'Psychedelic van', era: '1970s' },
      { value: 'd', label: 'Horse-drawn carriage', era: '1890s' },
    ],
  },
  {
    id: 2,
    question: 'Pick your favorite evening activity:',
    options: [
      { value: 'a', label: 'Jazz club with live band', era: '1920s' },
      { value: 'b', label: 'Drive-in movie theater', era: '1950s' },
      { value: 'c', label: 'Disco dancing', era: '1970s' },
      { value: 'd', label: 'Opera house gala', era: '1890s' },
    ],
  },
  {
    id: 3,
    question: 'What would you wear to a party?',
    options: [
      { value: 'a', label: 'Flapper dress with feathers', era: '1920s' },
      { value: 'b', label: 'Poodle skirt and saddle shoes', era: '1950s' },
      { value: 'c', label: 'Bell-bottoms and platform shoes', era: '1970s' },
      { value: 'd', label: 'Victorian corset and top hat', era: '1890s' },
    ],
  },
];

const eraResults = {
  '1890s': {
    title: 'The Victorian Era',
    description:
      'You belong in the age of elegance and refinement. Your soul yearns for grand ballrooms, handwritten letters, and the sophistication of a bygone era. You appreciate craftsmanship, tradition, and timeless beauty.',
    recommendations: 'Pocket watches, vintage writing desks, ornate picture frames',
  },
  '1920s': {
    title: 'The Roaring Twenties',
    description:
      'You\'re a free spirit of the Jazz Age! Art deco, speakeasies, and the thrill of rebellion call to you. You embrace change, celebrate life, and dance to your own rhythm with style and pizzazz.',
    recommendations: 'Art deco jewelry, gramophone records, vintage cocktail sets',
  },
  '1950s': {
    title: 'The Fabulous Fifties',
    description:
      'You\'re nostalgic for chrome diners, sock hops, and the birth of rock \'n\' roll. You appreciate optimism, Americana charm, and the golden age of innovation mixed with wholesome fun.',
    recommendations: 'Retro radios, vintage cameras, classic vinyl records',
  },
  '1970s': {
    title: 'The Groovy Seventies',
    description:
      'Peace, love, and freedom define your era! You\'re drawn to the counterculture movement, bold patterns, and the spirit of experimentation. You march to the beat of your own drum with creative flair.',
    recommendations: 'Vintage posters, turntables, retro sunglasses',
  },
};

export function EraQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleNext = () => {
    if (selectedAnswer) {
      const newAnswers = [...answers, selectedAnswer];
      setAnswers(newAnswers);
      setSelectedAnswer('');

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        calculateResult(newAnswers);
      }
    }
  };

  const calculateResult = (finalAnswers: string[]) => {
    const eraCount: { [key: string]: number } = {};
    
    finalAnswers.forEach((answer, index) => {
      const option = questions[index].options.find((opt) => opt.value === answer);
      if (option) {
        eraCount[option.era] = (eraCount[option.era] || 0) + 1;
      }
    });

    const dominantEra = Object.keys(eraCount).reduce((a, b) =>
      eraCount[a] > eraCount[b] ? a : b
    );

    setResult(dominantEra);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer('');
    setShowResult(false);
    setResult(null);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-[var(--neon-pink)]" />
              <h2 className="text-4xl text-[var(--copper)]">Find Your Era</h2>
              <Sparkles className="w-6 h-6 text-[var(--neon-blue)]" />
            </div>
            <p className="text-[var(--muted-foreground)]">
              Take a journey through time to discover which era resonates with your soul
            </p>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="paper-texture border-2 border-[var(--copper)]/30 neon-glow-blue">
                <CardContent className="pt-8 pb-8">
                  {/* Progress indicator */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-[var(--muted-foreground)]">
                        Question {currentQuestion + 1} of {questions.length}
                      </span>
                      <span className="text-sm text-[var(--copper)]">
                        {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                      </span>
                    </div>
                    <div className="h-2 bg-[var(--muted)] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[var(--copper)]"
                        initial={{ width: 0 }}
                        animate={{
                          width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                        }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Question */}
                  <h3 className="text-2xl mb-8 text-[var(--foreground)]">
                    {questions[currentQuestion].question}
                  </h3>

                  {/* Options */}
                  <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                    <div className="space-y-4">
                      {questions[currentQuestion].options.map((option) => (
                        <motion.div
                          key={option.value}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div
                            className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                              selectedAnswer === option.value
                                ? 'border-[var(--copper)] bg-[var(--copper)]/10'
                                : 'border-[var(--border)] hover:border-[var(--copper)]/50'
                            }`}
                            onClick={() => setSelectedAnswer(option.value)}
                          >
                            <RadioGroupItem value={option.value} id={option.value} />
                            <Label
                              htmlFor={option.value}
                              className="flex-1 cursor-pointer"
                            >
                              {option.label}
                            </Label>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </RadioGroup>

                  {/* Next Button */}
                  <div className="mt-8 flex justify-end">
                    <Button
                      onClick={handleNext}
                      disabled={!selectedAnswer}
                      className="bg-[var(--copper)] hover:bg-[var(--copper-light)] text-[var(--primary-foreground)] gap-2"
                    >
                      {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="paper-texture border-2 border-[var(--copper)] neon-glow-pink">
                <CardContent className="pt-12 pb-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  >
                    <Sparkles className="w-16 h-16 mx-auto mb-6 text-[var(--copper)]" />
                  </motion.div>

                  <h3 className="text-3xl mb-4 text-[var(--copper)]">
                    Your Era: {result && eraResults[result as keyof typeof eraResults].title}
                  </h3>

                  <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                    {result && eraResults[result as keyof typeof eraResults].description}
                  </p>

                  <div className="bg-[var(--copper)]/10 p-6 rounded-lg mb-8">
                    <h4 className="mb-3 text-[var(--copper)]">Recommended Time Relics:</h4>
                    <p className="text-[var(--muted-foreground)]">
                      {result && eraResults[result as keyof typeof eraResults].recommendations}
                    </p>
                  </div>

                  <Button
                    onClick={resetQuiz}
                    variant="outline"
                    className="border-[var(--copper)] text-[var(--copper)] hover:bg-[var(--copper)] hover:text-[var(--primary-foreground)] gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Take Quiz Again
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
