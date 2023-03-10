import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import courses from '../data/courses';

const SingleCourses = () => {
  const params = useParams();
  const navigate = useNavigate();
  const course = courses.find((el) => el.slug === params.courseSlug);
  //   if (!course) {
  //     return <NotFound />;
  //   }

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' });
    }
  }, [course, navigate]);
  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.id}</h2>
      <h3>{course?.slug}</h3>
      <Link
        to=".."
        relative="path"
      >
        All courses
      </Link>
    </>
  );
};

export default SingleCourses;
