import React, {useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import CarouseJumbotron from '../components/CarouselJumbotron'
import AuthService from '../services/auth.service';

export default function Home() {

  // const [currentUser, setCurrentUser] = useState(undefined);
  const navigate = useNavigate();
  
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      console.log(user);
    } else {
      navigate('/');
    }
  }, []);

  return (
    <>
        <CarouseJumbotron />
    </>
  )
}
