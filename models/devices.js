'use strict';

module.exports = function(sequelize, DataTypes) {
  var Devices = sequelize.define('Devices', {
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imei: {
      type: DataTypes.STRING,
      unique: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    warrant_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    insurance_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    in_stock: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
  return Devices;
};