import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Button } from 'components/ContactItem/ContactItem.styled';

export function ContactItem({ id, name, phone }) {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <p>{name}</p>
      <p>{phone}</p>
      <Button title="delete" type="button" onClick={onDeleteContact}>
        Delete
      </Button>
    </>
  );
}

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
