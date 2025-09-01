function App() {
  let ime: string = 'Ana';
  let godine: number = 22;
  let aktivan: boolean = true;
  let brojevi: number[] = [1, 2, 3];
  let korisnik: [string, number] = ['Marko', 25];

  function saberi(a: number, b: number): number {
    return a + b;
  }

  return (
    <>
      <h1 className="text-red-700">Typescript + Tailwind + React</h1>
    </>
  );
}

export default App;
