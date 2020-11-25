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

const getAllOrdersbyId = (cookie, state) => {
  const user = cookie.user;
  const {orders, gigs} = state;
  const ordersWithGigs = [];
  orders.forEach(order => {
    for (let gig of gigs) {
      if (gig.id === order.gig_id){
       ordersWithGigs.push({...order, gig});
      }
    }
  });

  return user && ordersWithGigs.filter(order => order.gig.contractor_id === user.id);
}

export { getGigbyUserId, check, getAllOrdersbyId };
