const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Dog",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      height_min: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      height_max: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weight_min: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weight_max: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      life_time_min: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      life_time_max: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:
          "https://i.pinimg.com/originals/0a/83/49/0a8349c457cbcf64edb0a337a9f06e8f.jpg",
      },
    },
    {
      timestamps: false,
    }
  );
};
