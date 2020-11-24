const getGigbyUserId = (cookie, state) => {
  const user = cookie.user;
  const gigs = state.gigs;
  return user && gigs.filter((gig) => gig.contractor_id === user.id);
};

const check = (personA, personB, conversations) => {
  return conversations.filter(conversation => 
    (personA === conversation.client_id && personB === conversation.contractor_id) ||
    (personB === conversation.client_id && personA === conversation.contractor_id)
  )[0];
}

export { getGigbyUserId, check };
