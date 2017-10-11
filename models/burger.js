//var connection;

/*if (process.env.JAWSDB_URL) connection = new Sequelize({
    username: "csj4wx7xlw453vr6",
    password: "arco43mc4tyhfdzu",
    database: "rydr65yfgbwz8djt",
    host: "xq7t6tasopo9xxbs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
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
}*/

module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name : {
            type: DataTypes.STRING,
            allowNull: false,            
        },
        devoured : {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        date : {
            type: 'TIMESTAMP',
            defaultValue: DataTypes.NOW
        }
    }, {
        timestamps: false
    });
    return Burger;
}


