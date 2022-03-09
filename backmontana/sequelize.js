const { Sequelize, Model, DataTypes } = require("sequelize");
const db ={}

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
  id_user: {
    type: DataTypes.INTEGER,
    unique: 'compositeIndex' 
  },
  country: DataTypes.TEXT,
  address: DataTypes.TEXT,
  locality: DataTypes.TEXT,
  price: DataTypes.INTEGER,
  url: DataTypes.TEXT,
}, 
{ 
  // indexes: [{unique: true,  fields: ['someUnique']}], 
  timestamps: false
}
);

// module.exports = (sequelize, Sequelize) => {
const User = sequelize.define("users", { 
  id_user: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }, 
  email: DataTypes.TEXT,
  phone_number: DataTypes.INTEGER,
  name: DataTypes.TEXT,
  surname: DataTypes.TEXT,
  gender: DataTypes.TEXT,
  country: DataTypes.TEXT,
  dateOfBirth: DataTypes.TEXT,
  password: DataTypes.TEXT,
  role: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  // id_payment_card: {
  //   type: DataTypes.INTEGER,
  //   // unique: true, 
  //   unique: 'compositeIndex' 
  // }, 
},  
{ 
  // indexes: [{unique: true,  fields: ['someUnique']}], 
  timestamps: false
});
// return User;
// };

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
  // indexes: [{unique: true,  fields: ['someUnique']}],
timestamps: false }
);

const PaymentCards = sequelize.define("payment_cards", {
  id_user: {
    type: DataTypes.INTEGER,
    // autoIncrement: true,
    // primaryKey: true
  },
  number: DataTypes.INTEGER,
  MM_YY: DataTypes.INTEGER,
  cnn: DataTypes.INTEGER,
  zip: DataTypes.INTEGER,
}, 
{   
  // indexes: [{unique: true,  fields: ['someUnique']}],
timestamps: false }
);     


// User.hasMany(PaymentCards, {foreignKey: 'id_payment_card', sourceKey: 'id_payment_card'});
// PaymentCards.belongsTo(User, {foreignKey: 'id_payment_card', targetKey: 'id'});


const Payment = User.hasMany(PaymentCards, {
  foreignKey: {
      name: 'id_user',
      allowNull: false,
      onDelete: 'CASCADE',
      as: 'payment',
  }
});
//  User.belongsTo(PaymentCards, { foreignKey: 'id_user',
// // as: 'payment',
// onDelete: 'CASCADE' });

module.exports = { Payment }

module.exports = {
  User: User,
  PaymentCards: PaymentCards,
  HotelRooms: HotelRooms,   
  SaleRooms: SaleRooms,
};
       