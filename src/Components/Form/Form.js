import { useForm, ValidationError } from "@formspree/react";

import "./Form.css";

export const Form = () => {
    const [state, handleSubmit] = useForm('xqazanlv');

    if (state.succeeded) {
        return <p className="success">Thank you for your submission!</p>;
    }

    return (
        <div>
            <h1>Contact us</h1>


            <form method="POST" onSubmit={handleSubmit} className="form">
                <label htmlFor="name">Full Name</label>
                <input id="name" type="text" name="name" required />
                <ValidationError
                    prefix="Name"
                    field="name"
                    className="fieldErrors"
                    errors={state.errors}
                />

                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" name="email" required />
                <ValidationError
                    prefix="Email"
                    field="email"
                    className="fieldErrors"
                    errors={state.errors}
                />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
                <ValidationError
                    prefix="Message"
                    field="message"
                    className="fieldErrors"
                    errors={state.errors}
                />

                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>


                <ValidationError className="formErrors" errors={state.errors} />
            </form>
        </div>
    );
};