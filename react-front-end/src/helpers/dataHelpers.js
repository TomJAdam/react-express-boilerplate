const getGigbyUserId = (cookie, state) => {
  const user = cookie.user;
  const gigs = state.gigs;
  return user && gigs.filter((gig) => gig.contractor_id === user.id);
};

const check = (personA, personB, conversations) => {
  return conversations.filter(
    (conversation) =>
      (personA === conversation.client_id &&
        personB === conversation.contractor_id) ||
      (personB === conversation.client_id &&
        personA === conversation.contractor_id)
  )[0];
};

const getAllOrdersbyContractorId = (cookie, state) => {
  const user = cookie.user;
  const { orders, gigs } = state;
  const ordersWithGigs = [];
  orders.forEach((order) => {
    for (let gig of gigs) {
      if (gig.id === order.gig_id) {
        ordersWithGigs.push({ ...order, gig });
      }
    }
  });

  return (
    user &&
    ordersWithGigs.filter((order) => order.gig.contractor_id === user.id)
  );
};

const getAllOrdersbyClientId = (cookie, state) => {
  const user = cookie.user;
  const { orders, gigs } = state;
  const ordersWithGigs = [];
  orders.forEach((order) => {
    for (let gig of gigs) {
      if (gig.id === order.gig_id) {
        ordersWithGigs.push({ ...order, gig });
      }
    }
  });

  return user && ordersWithGigs.filter((order) => order.client_id === user.id);
};

const getDateFormat = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date && date.toLocaleDateString(undefined, options);
};
const getDayFormat = (date) => {
  date && date.setSeconds(0);
  return date && date.toLocaleTimeString("en-US");
};

const dateBooked = (date, disabledDate) => {
  return disabledDate.some(
    (occupied) =>
      occupied.getFullYear() === date.getFullYear() &&
      occupied.getMonth() === date.getMonth() &&
      occupied.getDate() === date.getDate()
  );
};

export {
  getGigbyUserId,
  check,
  getAllOrdersbyContractorId,
  getAllOrdersbyClientId,
  getDateFormat,
  getDayFormat,
  dateBooked,
};
