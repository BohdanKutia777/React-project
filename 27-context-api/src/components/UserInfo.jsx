import UserContext from '../context/UserContext';
import UserName from './UserName';
const UserInfo = () => {
  return <UserName>{(value) => <h1>{value}</h1>}</UserName>;
  //   return (
  //     <UserContext.Consumer>{(value) => <h1>{value}</h1>}</UserContext.Consumer>
  //   );
};

export default UserInfo;
