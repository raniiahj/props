import React from 'react'

const styleR {
    fontSize:20,
    paddingTop: "100px"}

const Profile = (props) => {
    console.log(props);
    return (
        <div>
        {props.handleAlert(props.fullName)}
        <h1 style={styleR}> {props.title}</h1>
        </div>
    );
};

export default Profile; 
