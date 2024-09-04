module.exports = (sequelize, DataTypes) => {

    const Fatables = sequelize.define("Fatables", {
        faname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        designation: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    });

    return Fatables;
}