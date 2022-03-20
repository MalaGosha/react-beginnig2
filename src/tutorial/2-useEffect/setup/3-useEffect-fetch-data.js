import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
const [users, setUsers] = useState([]);

const getUsers = async() => {
  const response = await fetch (url);
  const users = await response.json();
  setUsers(users); // pozostawienie tego bez pustej tablicy w use Effect --> nie jest dobre bo cały czas renderuje users który jest powyżej i towrzy się nieskończona pętla
};

useEffect(() => {
  getUsers();
}, []);

  return (
    <>
    <h1> github users </h1>
    <ul className='users'>
      {users.map((user) => {
        const {id,login,avatar,url} = user;
        return (
        <li key={id}>
          <img src={avatar_url} alt={login}/>
          <div>
            <h4> {login} </h4>
            <a href={html_url}> profile </a>
          </div>
        </li>
        );
      })}
    </ul>
    </>

  );
};

export default UseEffectFetchData;
