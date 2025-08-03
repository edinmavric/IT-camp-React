import React, { useState } from 'react';

const questions = [
  {
    question: 'Šta `useMemo` vraća?',
    options: [
      'Funkciju',
      'Komponentu',
      'Memorisanu vrednost',
      'Memorisani callback',
    ],
    answer: 'Memorisanu vrednost',
  },
  {
    question:
      'Koji hook se koristi da se funkcija ne kreira iznova na svakom renderu?',
    options: ['useEffect', 'useMemo', 'useCallback', 'useState'],
    answer: 'useCallback',
  },
  {
    question:
      'Koji hook se koristi da se izbegne skupa kalkulacija prilikom svakog rendera?',
    options: ['useState', 'useMemo', 'useCallback', 'useEffect'],
    answer: 'useMemo',
  },
  {
    question: 'Koja je razlika između `useMemo` i `useCallback`?',
    options: [
      'Oba se koriste za memorisanje funkcija',
      '`useMemo` vraća funkciju, `useCallback` vrednost',
      '`useCallback` vraća funkciju, `useMemo` vrednost',
      'Nema razlike',
    ],
    answer: '`useCallback` vraća funkciju, `useMemo` vrednost',
  },
  {
    question:
      'Koji hook je koristan kada funkciju prosleđujemo memoizovanoj child komponenti?',
    options: ['useMemo', 'useCallback', 'useEffect', 'useContext'],
    answer: 'useCallback',
  },
  {
    question: 'Kada se `useMemo` ponovo izvršava?',
    options: [
      'Na svaki render',
      'Kada se promeni bilo koja vrednost u dependency array',
      'Samo prvi put',
      'Nikada',
    ],
    answer: 'Kada se promeni bilo koja vrednost u dependency array',
  },
  {
    question: 'Kada `useCallback` vraća **novu funkciju**?',
    options: [
      'Nikada',
      'Samo prvi put',
      'Kada se završi render',
      'Kada se promeni zavisnost u dependency array',
    ],
    answer: 'Kada se promeni zavisnost u dependency array',
  },
  {
    question: 'Šta je `React.memo`?',
    options: [
      'Custom hook',
      'Funkcija koja memoizuje vrednosti',
      'Funkcija koja sprečava re-render komponente ako se props ne promene',
      'Hook koji memoizuje funkcije',
    ],
    answer:
      'Funkcija koja sprečava re-render komponente ako se props ne promene',
  },
  {
    question:
      'Koji hook treba koristiti uz `React.memo` kada prosleđujemo funkciju kao prop?',
    options: ['useEffect', 'useMemo', 'useCallback', 'useState'],
    answer: 'useCallback',
  },
  {
    question:
      'Koji hook treba koristiti uz `React.memo` kada prosleđujemo rezultat neke skupe operacije?',
    options: ['useEffect', 'useMemo', 'useState', 'useCallback'],
    answer: 'useMemo',
  },
  {
    question: 'Da li `useMemo` garantuje da se vrednost nikada neće promeniti?',
    options: [
      'Da',
      'Ne',
      'Samo ako je dependency array prazan',
      'Zavisi od broja rendera',
    ],
    answer: 'Ne',
  },
  {
    question: 'Kako izgleda ispravna upotreba `useCallback`?',
    options: [
      'useCallback(() => fn(), [])',
      'useCallback(fn(), [])',
      'useCallback([fn], [])',
      'useCallback(() => {}, fn)',
    ],
    answer: 'useCallback(() => fn(), [])',
  },
  {
    question:
      'Šta će se dogoditi ako zaboravimo da stavimo dependency array u `useMemo`?',
    options: [
      'Vrednost se nikada neće računati',
      'Biće izračunata samo jednom',
      'Biće izračunata na svaki render',
      'Biće izračunata samo kada se promeni `state`',
    ],
    answer: 'Biće izračunata na svaki render',
  },
  {
    question: 'Zašto je loše koristiti `useCallback` svuda?',
    options: [
      'Jer usporava aplikaciju',
      'Jer se koristi samo uz useEffect',
      'Jer koristi previše memorije',
      'Jer ima smisla samo ako funkcija ide dalje u memoizovanu komponentu',
    ],
    answer:
      'Jer ima smisla samo ako funkcija ide dalje u memoizovanu komponentu',
  },
  {
    question:
      'Kako se koristi `useMemo` za filtriranje liste `users` po imenu "Ana"?',
    options: [
      'useMemo(() => users.map(user => user.name), [users])',
      "useMemo(() => users.filter(user => user.name === 'Ana'), [users])",
      "useMemo(() => users.find(user => user.name === 'Ana'), [])",
      "useMemo(users.filter(user => user.name === 'Ana'), [users])",
    ],
    answer: "useMemo(() => users.filter(user => user.name === 'Ana'), [users])",
  },
];

export default function QuizApp() {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAnswer = (index, option) => {
    setSelectedAnswers(prev => ({ ...prev, [index]: option }));
  };

  const getOptionStyle = (index, option) => {
    const isSelected = selectedAnswers[index] === option;
    const isCorrect = option === questions[index].answer;
    const show = selectedAnswers[index];

    if (!show) return baseStyle;

    if (isSelected && isCorrect)
      return {
        ...baseStyle,
        backgroundColor: '#d4edda',
        borderColor: '#28a745',
      };
    if (isSelected && !isCorrect)
      return {
        ...baseStyle,
        backgroundColor: '#f8d7da',
        borderColor: '#dc3545',
      };

    return baseStyle;
  };

  const baseStyle = {
    padding: '10px',
    marginBottom: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: '#f9f9f9',
    textAlign: 'left',
  };

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'sans-serif',
      }}
    >
      {questions.map((q, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            marginBottom: '20px',
            boxShadow: '2px 2px 5px rgba(0,0,0,0.05)',
          }}
        >
          <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>
            {index + 1}. {q.question}
          </p>
          {q.options.map((opt, i) => (
            <div
              key={i}
              onClick={() => handleAnswer(index, opt)}
              style={getOptionStyle(index, opt)}
            >
              {opt}
              {selectedAnswers[index] === opt && opt === q.answer && ' ✅'}
              {selectedAnswers[index] === opt && opt !== q.answer && ' ❌'}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
