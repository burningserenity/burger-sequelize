const Sequelize = require('sequelize');
var connection;

if (process.env.JAWSDB_URL) connection = new Sequelize({
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
});

else {
    connection = new Sequelize({  
        username: "root",
        password: null,
        database: "burgers_db",
        host: "localhost",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });
}

var Burger = connection.define("Burger", {
    burger_name : {
        type: Sequelize.STRING,
        allowNull: false,            
    },
    devoured : {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    date : {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.NOW
    }
}, {
    timestamps: false
});

Burger.sync();

module.exports = Burger;
