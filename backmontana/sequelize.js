const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("booking_db", "admin", "admin", {
 host: "db",
 dialect: "postgres",
});

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false
//     }
//   }
// }    
// );

module.exports = sequelize;

const HotelRooms = sequelize.define("hotel_rooms", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  country: DataTypes.TEXT,
  address: DataTypes.TEXT,
  locality: DataTypes.TEXT,
  price: DataTypes.INTEGER,
  url: DataTypes.TEXT,
  status: DataTypes.TEXT,
  }, 
  { 
    timestamps: false
  }
);

const User = sequelize.define("users", { 
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }, 
  email: DataTypes.TEXT,
  phone_number: DataTypes.BIGINT,
  name: DataTypes.TEXT,
  surname: DataTypes.TEXT,
  gender: DataTypes.TEXT,
  country: DataTypes.TEXT,
  dateOfBirth: DataTypes.TEXT,
  password: DataTypes.TEXT,
  isAdmin: DataTypes.BOOLEAN,
},  
{ 
  timestamps: false
});


const UserRooms = sequelize.define('UserRooms', {}, { timestamps: false });

User.belongsToMany(HotelRooms, { through: UserRooms });
HotelRooms.belongsToMany(User, { through: UserRooms });

const SaleRooms = sequelize.define("sale_rooms", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  country: DataTypes.TEXT,
  address: DataTypes.TEXT,
  locality: DataTypes.TEXT,
  priceBefore: DataTypes.INTEGER,
  priceAfter: DataTypes.INTEGER,
  discount: DataTypes.INTEGER,
  url: DataTypes.TEXT,
  }, 
  {
    timestamps: false 
  }
);

const PaymentCards = sequelize.define("payment_cards", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  number: DataTypes.INTEGER,
  MM_YY: DataTypes.INTEGER,
  cnn: DataTypes.INTEGER,
  zip: DataTypes.INTEGER,
}, 
{   
  timestamps: false }
);     

const UserPaymentCards = sequelize.define('UserPaymentCards', {}, { timestamps: false });

User.belongsToMany(PaymentCards, { through: UserPaymentCards });
PaymentCards.belongsToMany(User, { through: UserPaymentCards });


module.exports = {
  User: User,   
  PaymentCards: PaymentCards,
  HotelRooms: HotelRooms,   
  SaleRooms: SaleRooms,
  UserRooms: UserRooms,
  UserPaymentCards: UserPaymentCards,
};
       