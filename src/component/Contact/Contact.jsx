import { FaUser, FaPhone } from "react-icons/fa";
import PropTypes from "prop-types";
import css from "./Contact.module.css";

const Contact = ({ contact: { id, name, number }, onDelete }) => {
    return (
        <>
            <p className={css.contactInfo}>
                <FaUser style={{ marginRight: "0.5rem" }} />
                {name}
                <span>
                    <FaPhone
                        style={{
                            marginRight: "0.5rem",
                            transform: "rotate(90deg)",
                        }}
                    />
                    {number}
                </span>
            </p>
            <button
                className={css.delete}
                type="button"
                onClick={() => onDelete(id)}
            >
                Delete
            </button>
        </>
    );
};


Contact.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired, 
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Contact;
