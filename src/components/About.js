// import React, { useContext, useEffect } from "react";
// import noteContext from "../context/notes/NoteContext";
const About = () => {
    return (
        <div className="container my-4">
            <h1>About Us</h1>
            <div className="accordion mt-4" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            About QuickNotes
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            Welcome to our notes app -{" "}
                            <strong>QuickNotes</strong>! We provide a secure and
                            convenient way for you to store your notes on the
                            cloud. With our user-based authentication system,
                            you can create your own account and access your
                            notes from anywhere, at any time.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Features
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <ul>
                                <li>
                                    <strong>User Authentication:</strong> Our
                                    app ensures the security of your notes by
                                    implementing a user-based authentication
                                    system. Create a personal account with a
                                    unique username and password to securely
                                    access and manage your notes.
                                </li>
                                <li>
                                    <strong>Cloud Storage:</strong> Say goodbye
                                    to the limitations of local storage. Our app
                                    utilizes cloud storage, allowing you to
                                    store your notes on our reliable and secure
                                    servers. Your notes are protected and backed
                                    up, ensuring that your data is safe and
                                    accessible even if you switch devices.
                                </li>
                                <li>
                                    <strong>
                                        Create,Edit, and Delete Notes:
                                    </strong>{" "}
                                    Our app empowers you to create, edit, and
                                    delete notes effortlessly. Whether you want
                                    to capture quick reminders, jot down
                                    brilliant ideas, or manage your to-do lists,
                                    you have the flexibility to create new
                                    notes, edit existing ones, and delete notes
                                    when they are no longer needed.
                                </li>
                                <li>
                                    <strong>Organize with Notebooks:</strong>
                                    Stay organized by categorizing your notes
                                    into separate notebooks. Create custom
                                    notebooks based on different topics,
                                    projects, or personal preferences. This
                                    feature enables you to keep your notes
                                    neatly organized and easily searchable,
                                    streamlining your note-taking experience.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            Usage
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <p>
                                To use our notes app, follow these simple steps:
                                <ul>
                                    <li>
                                        Create an account by providing your
                                        name, email, and password.
                                    </li>
                                    <li>
                                        Login using your email and password.
                                    </li>
                                    <li>
                                        Add notes by clicking on the "New Note"
                                        or "Add Note" button and entering the
                                        title and content.
                                    </li>
                                    <li>
                                        View and update your notes from the
                                        dashboard.
                                    </li>
                                    <li>
                                        To make changes, click on the note and
                                        select the "Edit" or "Update" option.
                                    </li>
                                    <li>Delete unwanted notes when needed. </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="mt-4">
                Enjoy organizing and managing your notes with our user-friendly
                app!
            </p>
        </div>
    );
};

export default About;
