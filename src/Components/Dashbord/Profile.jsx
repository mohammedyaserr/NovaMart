import React, { useState } from 'react';
import Dashbord from './Navbar';
import "./profile.css";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import logoutimg from "../../assets/logout.png";
import edit from "../../assets/editing.png";
import dlt from "../../assets/delete.png";
import Navbar from './Navbar';

const Profile = () => {
    const navigate = useNavigate();

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const [data, setData] = useState(currentUser || {
        name: "",
        email: "",
        number: "",
        password: ""
    });


    const [editdata, seteditdata] = useState(false);


    const logout = () => {
        localStorage.removeItem("currentUser");
        navigate("/");
        toast.success("Logout successfully");
    };

    const updatedusr = () => {
    let users = JSON.parse(localStorage.getItem("Userslist")) || [];

    const emailExists = users.some(
        (user) => user.email.toLowerCase() === data.email.toLowerCase() &&
                  user.email.toLowerCase() !== currentUser.email.toLowerCase()
    );

    const nuberExists = users.some(
        (user) => user.number === data.number &&
                  user.number !== currentUser.number
    );

    if (emailExists , nuberExists) {
        toast.warning("Email or Number already exists!");
        return; 
    }

    // if (numberExists) {
    //     toast.warning("Phone number already exists!");
    //     return; 
    // }

    users = users.map(user =>
        user.email === currentUser.email ? data : user
    );

    localStorage.setItem("Userslist", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(data));

    seteditdata(false);
    toast.success("Profile updated successfully");

    console.log("clicked");
    
};


    const delact = () => {
        const users = JSON.parse(localStorage.getItem("Userslist")) || [];

        const updatedUsers = users.filter(user => user.email !== currentUser.email);

        localStorage.setItem("Userslist", JSON.stringify(updatedUsers));
        localStorage.removeItem("currentUser");

        navigate("/signup");
        toast.error("Account deleted ");
    };

    return (
        <>
            <Navbar />
            <div className="main-container">
                <div className="side-tab">
                    <div className="side-tab-headins">
                        <h1 className='heading'>My Profile</h1>
                    </div>
                    <div className="side-tab-btns">
                        <button
                            className='btn-side-pannel'
                            onClick={() => seteditdata(true)}
                        >
                            Edit Profile <img className='editbtnimg' src={edit} alt="" />
                        </button>
                        <button className='btn-side-pannel' onClick={logout}>
                            Logout <img className='logoutbtnimg' src={logoutimg} alt="" />
                        </button>
                        <button className='btn-side-pannel-dlt' onClick={delact}>
                            Delete <img className='logoutbtnimg' src={dlt} alt="" />
                        </button>
                    </div>
                </div>

                <div className="main-tab">
                    <div className="editsimputs">
                        {editdata ? (
                            <>
                                <div className="parent">
                                    <label htmlFor="name">Name :</label>
                                    <input type="text" id="name" className="editbox" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                                </div>

                                <div className="parent">
                                    <label htmlFor="email">Email :</label>
                                    <input type="email" id="email" className="editbox" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                                </div>

                                <div className="parent">
                                    <label htmlFor="number">Number :</label>
                                    <input type="text" id="number" className="editbox" value={data.number} onChange={(e) => setData({ ...data, number: e.target.value })} />
                                </div>

                                <div className="parent">
                                    <label htmlFor="password">Password :</label>
                                    <input type="text" id="password" className="editbox" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                                </div>



                                <div className="btmbtns">
                                    <input
                                        type="button"
                                        value="Save"
                                        onClick={updatedusr}
                                        className='svbtn'
                                    />
                                    <input
                                        type="button"
                                        value="Cancel"
                                        onClick={() => seteditdata(false)}
                                        className='svbtn cancel'
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <h2>Name : {data.name}</h2>
                                <h2>Email : {data.email}</h2>
                                <h2>Number : {data.number}</h2>
                                <h2>Password : {data.password}</h2>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
