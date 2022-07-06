import UserContext from "../../context/user/userContext.js";
import { fetchData } from "../../main.js";
import {useContext, Fragment} from 'react';
import { useState } from "react";


function About() {
    const {user, updateUser} = useContext(UserContext);

    const authenticated = (
        <Fragment>
            <i>{user.username}</i>
        </Fragment>
    );

    const guest = (
        <Fragment>
            <h2></h2>
        </Fragment>
    );

    return (

        <div className="container my-5 mx-5">
            <div className="card px-5 py-5">
                <div className="row">
                    <div className="col-sm-5 card px-4 py-4">
                        <h3>User's Profile</h3>
                        <center>
                            <img src="https://media.istockphoto.com/vectors/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-vector-id1130884625?k=20&m=1130884625&s=612x612&w=0&h=OITK5Otm_lRj7Cx8mBhm7NtLTEHvp6v3XnZFLZmuB9o=" height="200" alt="" />
                            <center><h4>{authenticated}</h4></center>
                            <center><h6 className="mt-4 text-primary">Followers: 4k</h6></center>
                            <center><h6 className="text-primary">Following: 5k</h6></center>
                        </center>
                    </div>
                    <div className="col-sm-7 card px-4 py-4">
                        <h4 className="mb-4">Add a post</h4>
                        <form action="">
                            <textarea name="" id="" rows="3" className="form-control"></textarea>
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-sm btn-success my-3"><strong>Post this content</strong></button>
                            </div>
                        </form>
                        <h4 className="mt-5 mb-3">All Your Posts</h4>
                        <div className="card px-4 py-4">
                            <h6>Hello Guys! I am very excited to announce this! I got placed in Fortune-500</h6>
                            <h6>2k <i className="fa fa-thumbs-up text-primary"></i></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;