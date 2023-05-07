import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import css from './App.module.css'
import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter'
import ContactList from './ContactsList/ContactsList'

class App extends Component {
  state = {
  contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
  filter: ''
  }
  changeContacts = (name, number) => {
    this.state.contacts.find(contact => 
      contact.name.toLowerCase() === name.toLowerCase())
      && alert(`${ name } is already in contacts`)
    
    const newContact = { 'id': nanoid(), 'name': name, 'number':number }
    this.setState((prevState) => ({
    contacts: [newContact, ...prevState.contacts],
    }))
    }  
  changeFilter = ({target:{name, value}}) => {
    this.setState({
      [name]:value,
    })
  }
  deleteContact = idContact => {
      this.setState((prevState) => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idContact)
    }))
  }
  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    return (
      <div className={css.phonebook}>
        <h1 className={css.phonebook__title}>Phonebook</h1>
        <ContactForm onSubmit={this.changeContacts} />
        <h2 className={css.contacts__title}>Contacts</h2>
        <Filter
          filter={filter}
          onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDelete={this.deleteContact}
        />
      </div>
    )
  }
}
 
export default App