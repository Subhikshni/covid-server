const { DataTypes } = require("sequelize");
const sequelize = require("./db.js"); // Assuming your Sequelize instance is exported from a file named db.js

const employee = sequelize.define(
  "employee",
  {
    Sno: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    ID: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    Department: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    DateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Gender: {
      type: DataTypes.ENUM("Male", "Female", "Prefer not to say"),
      allowNull: false,
    },
    Designation: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    Salary: {
      type: DataTypes.DECIMAL(8, 2),
      allowNull: false,
    },
  },
  {
    tableName: "employees",
    timestamps: true, // Assuming you don't want Sequelize to automatically manage createdAt and updatedAt fields
  }
);

module.exports = employee;
