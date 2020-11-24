const getGigbyUserId = (cookie, state) => {
  const user = cookie.user;
  const gigs = state.gigs;
  return user && gigs.filter((gig) => gig.contractor_id === user.id);
};

const check = (personA, personB, conversations) => {
  return conversations.filter(conversation => 
    (personA.id === conversation.client_id && personB.id === conversation.contractor_id) ||
    (personB.id === conversation.client_id && personA.id === conversation.contractor_id)
  );
}

export { getGigbyUserId, check };
