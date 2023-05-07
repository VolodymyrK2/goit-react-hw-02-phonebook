import PropTypes from 'prop-types'
import css from './ContactsList.module.css'
import ContactListItem from 'components/ContactListItem/ContactListItem'
const ContactList = ({contacts, onDelete}) => {
  return (
              <ul>
              {contacts.map(({id, name, number}) => (
                  <ContactListItem
                  key={id}
                  id = {id}
                      name={name}
                  number={number}
                  onClick = {onDelete}
                  />
              ))}
</ul>
  
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired,
    number:PropTypes.string.isRequired
  })),
  onDelete: PropTypes.func.isRequired
}

export default ContactList