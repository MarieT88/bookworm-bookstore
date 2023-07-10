const { UUID, UUIDV4, STRING, INTEGER, ENUM } = require("sequelize");
const conn = require("../conn");

const Address = conn.define("address", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  streetAddress: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Address required",
      },
    },
  },
  apt: {
    type: STRING,
  },
  city: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "City required",
      },
    },
  },
  state: {
    type: ENUM(
      "AL",
      "AK",
      "AZ",
      "AR",
      "AS",
      "CA",
      "CO",
      "CT",
      "DE",
      "DC",
      "FL",
      "GA",
      "GU",
      "HI",
      "ID",
      "IL",
      "IN",
      "IA",
      "KS",
      "KY",
      "LA",
      "ME",
      "MD",
      "MA",
      "MI",
      "MN",
      "MS",
      "MO",
      "MT",
      "NE",
      "NV",
      "NJ",
      "NH",
      "NM",
      "NY",
      "NC",
      "ND",
      "MP",
      "OH",
      "OK",
      "OR",
      "PA",
      "PR",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "TT",
      "UT",
      "VT",
      "VA",
      "VI",
      "WA",
      "WV",
      "WI",
      "WY",
      "AA",
      "AE",
      "AP"
    ),
  },
  zipCode: {
    type: INTEGER,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Zip Code Required",
      },
    },
  },
});

module.exports = Address;
