export default function CourseCard({ title, instructor, points, children }) {
  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '10px',
        marginBottom: '10px',
      }}
    >
      <h3>{title}</h3>
      <p>Predavač: {instructor}</p>
      <p>Bodovi: {points}</p>
      {children && <div>{children}</div>}
    </div>
  );
}
