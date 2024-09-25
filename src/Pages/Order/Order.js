import { useForm, ValidationError } from "@formspree/react";
import { useDispatch } from "react-redux";
import SendConfirmation from "../../Components/Form/SendConfirmation";
import { removeAllFromCart } from "../../redux/cartSlice";

const Order = () => {
    const [state, handleSubmit] = useForm('xqazanlv');

    const dispatch = useDispatch();

    if (state.succeeded) {
        return (
            <SendConfirmation
                title={'Your pre-order'}
                text={`Thank you! Your pre-order has been accepted. 
            Our team will contact you soon.`}
            />
        );
    }

    return (
        <div>
            <h1>Your pre-order</h1>
            <p>Please, leave your phone number so we can contact you regarding delivery.</p>
            <p>Additionally, feel free to leave any comments or special instructions about your pre-order.
            </p>
            <form method="POST" onSubmit={handleSubmit} className="form">

                <textarea
                    id="message"
                    name="message"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting} onClick={() => dispatch(removeAllFromCart())}>
                    Submit
                </button>

                <ValidationError className="formErrors" errors={state.errors} />
            </form>
        </div >
    );
};

export default Order;