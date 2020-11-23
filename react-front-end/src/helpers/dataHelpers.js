const getGigbyUserId = (state) => {
  const { user, gigs } = state;
  return gigs.filter((gig) => (gig.contractor_id = user.id));
};

export { getGigbyUserId };
