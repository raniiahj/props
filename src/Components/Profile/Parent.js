import React from 'react';
import Profile from './Profile';

function Parent() {


const handleName = (fullName) => {
      alert ('Hello my name is ${fullName}'); 
};
return (
    <div>
    <Profile
    title="Welcome to my props checkpoint"
    fullName= "Rania El Haj"
    bio="Majored in Biology and currently learning Web developement at GoMyCode"
    profession="knowledge seeker"
    handleAlert={handleName}

    />
    </div>
  );
}

export default Parent;