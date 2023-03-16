import UserContext from '../context/UserContext';
import { useContext, useState } from 'react';

const ChangeUser = () => {
  const { setUser } = useContext(UserContext);
  const [valueInput, setValueInput] = useState('');
  const handleInputChange = (event) => {
    setValueInput(event.target.value);
  };
  const changeUser = () => {
    setUser(valueInput);
  };

  return (
    <>
      <input
        type="text"
        value={valueInput}
        onChange={handleInputChange}
      />
      <button onClick={changeUser}>Change user</button>
    </>
  );
};

export default ChangeUser;
