// Nije dobro koristiti props drilling, jer je
// to nepraktično i otežava održavanje koda.

// const App = () => {
//   return <Parent name="Ana" />;
// };

// const Parent = ({ name }) => {
//   return <Child name={name} />;
// };

// const Child = ({ name }) => {
//   return <GrandChild name={name} />;
// };

// const GrandChild = ({ name }) => {
//   return <p>Zdravo, {name}!</p>;
// };

// export default App;

// Pravljenje i korsitenje konteksta:
// import { createContext, useContext } from 'react';

// const NameContext = createContext();

// const App = () => {
//   return (
//     <NameContext.Provider value="Ana">
//       <div>
//         <h1>App</h1>
//         <Parent />
//       </div>
//     </NameContext.Provider>
//   );
// };

// const Parent = () => {
//   const name = useContext(NameContext);

//   return (
//     <div>
//       <h1>Parent, {name}</h1>
//       <Child />
//     </div>
//   );
// };

// const Child = () => {
//   return (
//     <div>
//       <h1>Child</h1>
//       <GrandChild />
//     </div>
//   );
// };

// const GrandChild = () => {
//   const name = useContext(NameContext);

//   return (
//     <div>
//       <h1>GrandChild</h1>
//       <p>Zdravo, {name}!</p>
//     </div>
//   );
// };

// export default App;

import { UserProvider } from './context/UserContext';
import Profile from './components/Profile';
import Login from './components/Login';

const App = () => {
  return (
    <UserProvider>
      <Profile />
      <Login />
    </UserProvider>
  );
};

export default App;
