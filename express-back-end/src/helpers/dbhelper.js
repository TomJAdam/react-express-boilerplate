module.exports = (db) => {
  const getUserByEmail = (email) => {
    const queryParams = [email];
    const queryStr = `SELECT * FROM users where email = $1;`;
    return db
      .query(queryStr, queryParams)
      .then((res) => res.rows[0])
      .catch((error) => console.log("Error catched: ", error));
  };

  const getUserById = (id) => {
    const queryParams = [id];
    const queryStr = `SELECT * FROM users where id = $1;`;
    return db
      .query(queryStr, queryParams)
      .then((res) => res.rows[0])
      .catch((error) => console.log("Error catched: ", error));
  };

  return { getUserByEmail, getUserById };
};
