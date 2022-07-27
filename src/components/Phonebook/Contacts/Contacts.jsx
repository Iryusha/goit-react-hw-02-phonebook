import s from './Contacts.module.css';

const Contacts = ({ contacts, onRemoveContact }) => {
  const { id, name, number } = contact;
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={id} className={s.item}>
            {name}: {number}
            <button
              key={id}
              name={name}
              className={s.buttonDelete}
              type="button"
              onClick={() => onRemoveContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default Contacts;