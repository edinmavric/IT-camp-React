import { students } from '../data/students';
import StudentCard from '../components/StudentCard';

export default function Students() {
  const activeStudents = students.filter(student => student.active);

  return (
    <div>
      <h2>Aktivni studenti</h2>
      {activeStudents.map(student => (
        <StudentCard key={student.id} {...student} />
      ))}
    </div>
  );
}
