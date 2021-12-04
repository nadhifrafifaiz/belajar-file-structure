
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isVerified: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        userImage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dateOfBirth: {
            type: DataTypes.DATE,
            allowNull: false
        }
    })

    Users.associate = (models) => {
        Users.belongsTo(models.Roles, {
            foreignKey: {
                allowNull: false
            }

        })

        Users.hasMany(models.Addresses, {
            onDelete: "cascade"
        })
    }

    return Users
}