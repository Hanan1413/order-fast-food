import { useState } from 'react';
import Button from '../../ui/Button';
import { updateName } from './userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if(!username) return;
    // update redux store 
    dispatch(updateName(username))
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit} className='mb-8'>
      <p className='mb-4 text-sm '>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-72 h-7 border border-b-slate-500"
      />

      {username !== '' && (
           <div className='mt-5'>
            <Button>
            Start Ordering
            </Button>
           </div>
      


      )}
    </form>
  );
}

export default CreateUser;
