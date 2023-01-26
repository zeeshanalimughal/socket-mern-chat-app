const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  const newToken = jwt.sign({ id }, process.env.JWT_SECRET || 'zeeshan112233', {
    expiresIn: "7d",
  });
  return newToken;
};

module.exports = generateToken;
