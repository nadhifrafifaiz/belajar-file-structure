
module.exports = (sequelize, DataTypes) => {
    const Addresses = sequelize.define("Addresses", {
        recipientName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subdivision: {
            type: DataTypes.STRING,
            allowNull: false
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        province: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isDefault: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        latitude: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        longitude: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    })

    Addresses.associate = (models) => {
        Addresses.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }

        })
    }

    return Addresses
}