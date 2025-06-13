import Button from './components/Button';
import Input from './components/Input';
import Link from './components/Link';
import Welcome from './components/Welcome';

function App() {
  const react = 'React';
  const bool = true;

  return (
    <>
      <h1>Welcome to my first {react} app</h1>
      {bool && react ? (
        <>
          <Welcome name="Mustafa" age={25} />
          <Welcome name="Ali" age={30} />
          <Welcome name="Zeynep" age={28} />
          <Welcome name="Ayşe" age={22} />
          <Welcome name="Fatma" age={35} />
          <Welcome name="Emre" age={27} />
        </>
      ) : (
        <>
          <Link hrefLink="https://instagram.com" targetBlank />

          <Input id="input-1" label />
          <Input id="input-2" label labelTextInput="Unesite to i to" />
          <Input id="input-3" label />

          <Button textContent="Click Me" type="button" />
          <Button textContent="Submit" type="submit" />
          <Button textContent="Reset" type="reset" />
        </>
      )}
    </>
  );
}

export default App;
