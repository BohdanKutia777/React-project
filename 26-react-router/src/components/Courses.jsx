import { NavLink } from 'react-router-dom';
import courses from '../data/courses';
const Courses = () => {
  return (
    <>
      <h1>Courses</h1>
      <div className="containerCourses">
        {courses.map((el) => (
          <NavLink
            key={courses.id}
            to={`/courses/${el.slug}`}
          >
            {el.title}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Courses;
