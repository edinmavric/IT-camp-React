import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

export default function Courses() {
  const frontendCourses = courses.filter(
    course => course.category === 'frontend'
  );

  return (
    <div>
      <h2>Frontend kursevi</h2>
      {frontendCourses.length > 0 ? (
        frontendCourses.map(course => (
          <CourseCard key={course.id} {...course}>
            <small>Kategorija: {course.category}</small>
          </CourseCard>
        ))
      ) : (
        <p>Nema dostupnih kurseva</p>
      )}
    </div>
  );
}
