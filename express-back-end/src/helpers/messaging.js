function check(personA, personB, conversations) {
  return conversations.filter(conversation => 
    (personA.id === conversation.client_id && personB.id === conversation.contractor_id) ||
    (personB.id === conversation.client_id && personA.id === conversation.contractor_id)
  );
}

module.exports = { check }