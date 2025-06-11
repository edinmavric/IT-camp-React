function Welcome(props) {
  return (
    <h1>
      Welcome to my first React app, brother {props.name}, you are {props.age}
    </h1>
  );
}

function App() {
  const react = 'React';
  return (
    <>
      <h1>Welcome to my first {react} app</h1>
      <Welcome name="Mustafa" age={25} />
      <Welcome name="Ali" age={30} />
      <Welcome name="Zeynep" age={28} />
      <Welcome name="Ayşe" age={22} />
      <Welcome name="Fatma" age={35} />
      <Welcome name="Emre" age={27} />
    </>
  );
}

export default App;
