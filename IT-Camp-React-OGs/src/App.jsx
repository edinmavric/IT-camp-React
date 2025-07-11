import { useState } from 'react';

const App = () => {
  const questions = [
    {
      text: 'Koja linija je optimalna za onChange handler ako već imaš funkciju handleChange(e)?',
      answers: [
        'a) onChange={e => handleChange(e)}',
        'b) onChange={handleChange}',
        'c) onChange={() => handleChange()}',
        'd) onChange= {e => { handleChange(e); }}',
      ],
      correct: [1],
      showType: 'highlight',
    },
    {
      text: 'Šta se dešava ako koristiš let umesto useState u komponenti?',
      answers: [
        'a) Sve radi kao i sa useState',
        'b) let vrednost se pamti između rendera',
        'c) Vrednost se resetuje pri svakom renderu',
        'd) Komponenta se automatski ne osvežava',
      ],
      correct: [2, 3],
      showType: 'modal',
    },
    {
      text: 'Kako pravilno dodajemo novi objekat u niz stanja u Reactu?',
      answers: [
        'a) setUsers(users.push(noviUser))',
        'b) setUsers([...users, noviUser])',
        'c) users.push(noviUser); setUsers(users)',
        'd) setUsers(users.concat(noviUser))',
      ],
      correct: [1, 3],
      showType: 'expand',
    },
    {
      text: 'Koji je ispravan način da obrišemo korisnika iz niza users?',
      answers: [
        'a) users.pop()',
        'b) users.splice(id, 1)',
        'c) setUsers(users.filter(user => user.id !== id))',
        'd) delete users[id]',
      ],
      correct: [2],
      showType: 'highlight',
    },
    {
      text: 'Kako najefikasnije prebacujemo boolean stanje true ⇄ false?',
      answers: [
        'a) setPrikazi(!prikazi)',
        'b) setPrikazi(true)',
        'c) setPrikazi(prev => !prev)',
        'd) prikazi = !prikazi',
      ],
      correct: [2],
      showType: 'expand',
    },
  ];

  const [shown, setShown] = useState(Array(questions.length).fill(false));
  const [modalIdx, setModalIdx] = useState(null);

  const styles = {
    highlight: {
      background: '#d1ffd6',
      fontWeight: 'bold',
      borderRadius: '4px',
      padding: '2px 6px',
    },
    wrong: {
      background: '#ffd6d6',
      color: '#b30000',
      fontWeight: 'bold',
      borderRadius: '4px',
      padding: '2px 6px',
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    },
    modal: {
      background: '#fff',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
      minWidth: '300px',
      textAlign: 'center',
    },
    expand: {
      marginTop: '0.5rem',
      background: '#f0f0f0',
      borderRadius: '4px',
      padding: '0.5rem 1rem',
      display: 'inline-block',
    },
    showBtn: {
      marginLeft: '1rem',
      marginTop: '0.5rem',
      cursor: 'pointer',
    },
  };

  //   Napraviti React aplikaciju koja ima sledeće funkcionalnosti:

  //  Deo 1: Unos korisnika
  // input za ime
  // radio dugmići za izbor: user ili admin
  // dugme “Dodaj korisnika”
  // nakon dodavanja, ime iz inputa se briše

  //  Deo 2: Lista korisnika
  // prikaz svih dodatih korisnika u listi
  // admin korisnici su podebljani
  // svaki korisnik ima dugme "Obriši"
  // koristi id sa Date.now() za unikatnost

  //  Deo 3: Uslovno prikazivanje
  // dugme “Prikaži/Sakrij korisnike”
  // koristi useState boolean za prikaz

  //  Bonus izazov:
  // Dodati opciju “Obriši sve korisnike”.

  return (
    <div>
      <h2>React pitanja</h2>
      {questions.map((q, idx) => (
        <div key={idx} style={{ marginBottom: '2rem' }}>
          <div style={{ fontWeight: 500 }}>{`Pitanje ${idx + 1}: ${
            q.text
          }`}</div>
          <ul style={{ marginTop: '0.5rem' }}>
            {q.answers.map((a, i) => {
              if (shown[idx]) {
                if (q.correct.includes(i)) {
                  return (
                    <li key={i} style={styles.highlight}>
                      {a}
                    </li>
                  );
                } else {
                  return (
                    <li key={i} style={styles.wrong}>
                      {a}
                    </li>
                  );
                }
              }
              return <li key={i}>{a}</li>;
            })}
          </ul>
          <button
            style={styles.showBtn}
            onClick={() => {
              if (q.showType === 'modal') setModalIdx(idx);
              else setShown(s => s.map((v, i) => (i === idx ? true : v)));
            }}
          >
            Prikaži odgovor
          </button>
          {q.showType === 'expand' && shown[idx] && (
            <div style={styles.expand}>
              <strong>Tačan odgovor:</strong> <br />
              {q.correct.map(i => q.answers[i]).join(' / ')}
            </div>
          )}
        </div>
      ))}
      {modalIdx !== null && (
        <div style={styles.modalOverlay} onClick={() => setModalIdx(null)}>
          <div style={styles.modal} onClick={e => e.stopPropagation()}>
            <h3>Tačan odgovor</h3>
            <div style={{ margin: '1rem 0' }}>
              {questions[modalIdx].correct
                .map(i => questions[modalIdx].answers[i])
                .join(' / ')}
            </div>
            <button onClick={() => setModalIdx(null)}>Zatvori</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
