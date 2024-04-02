import Contact from '../contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={css.item}>
      {contacts.map(contact => {
        return (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
            id={contact.id}
          />
        );
      })}
    </div>
  );
};

export default ContactList;
