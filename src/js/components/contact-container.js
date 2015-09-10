var React = require('react');

var ContactContainer = React.createClass({

  propTypes: function(){
    contactPool: React.PropTypes.array
  },

  //normally we would have getInitialState return contactPool: [] as a placeholder for when the page loads and then we would have an ajax call to retreive the contactPool from the server
  getInitialState: function(){
    return {
    contactPool: [{name: "Barry", phone: "410-345-2876"}, {name: "Monty", phone: "980-335-9876"}, {name: "Lisa", phone: "675-342-7654"}, {name: "Irene", phone: "987-765-5436"}, {name: "Deborah", phone: "657-345-8765"}]
    }
  },

  render: function(){

    var contactListing = this.state.contactPool.map(function(contact){
      return(
          <div>
            <h1>{contact.name}</h1>
            <small>{contact.phone}</small>
          </div>
      )
    });

    return (
      <div>{contactListing}</div>
    );
  }
});

module.exports = ContactContainer;