export default function StudentCard({ name, year, major, children }) {
  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '10px',
        marginBottom: '10px',
      }}
    >
      <h3>{name}</h3>
      <p>Godina: {year}</p>
      <p>Smer: {major}</p>
      {children && <div>{children}</div>}
    </div>
  );
}
