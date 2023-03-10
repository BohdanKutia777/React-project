import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import courses from '../data/courses';
import NotFound from './NotFound';

const SingleCourses = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const course = courses.find((el) => el.slug === slug);
  //   if (!course) {
  //     return <NotFound />;
  //   }

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' });
    }
  }, [course]);
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
