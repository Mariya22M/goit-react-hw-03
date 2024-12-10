import Contact from "../Contact/Contact";
import PropTypes from "prop-types"; 
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul className={css.contacList}>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <Contact contact={contact} onDelete={onDelete}></Contact>
                </li>
            ))}
        </ul>
    );
};


ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired, 
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired, 
};

export default ContactList;


