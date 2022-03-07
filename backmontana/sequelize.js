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
  id_room: {
    type: DataTypes.INTEGER,
    // autoIncrement: true,
    // allowNull: false,
    unique: 'compositeIndex' 
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
});

const User = sequelize.define("users", {  
  id_user: {
    type: DataTypes.INTEGER, 
    unique: 'compositeIndex',
    // unique: true,
    // allowNull: false,
    // autoIncrement: true,
    references: {
      model: HotelRooms,
      key: 'id_phone_number',
    }
  },
  email: DataTypes.TEXT,
  id_payment_card: {
    type: DataTypes.INTEGER,
    unique: 'compositeIndex' 
    // unique: true, 
  },
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
  id_phone_number: {
    type: DataTypes.INTEGER,
    // unique: true, 
    unique: 'compositeIndex' 
  }, 
},  
{ 
  indexes: [{unique: true,  fields: ['someUnique']}], 
  timestamps: false
});


const SaleRooms = sequelize.define("sale_rooms", {
  id_room: {
    type: DataTypes.INTEGER,
    unique: 'compositeIndex' 
  },
  country: DataTypes.TEXT,
  address: DataTypes.TEXT,
  locality: DataTypes.TEXT,
  priceBefore: DataTypes.INTEGER,
  priceAfter: DataTypes.INTEGER,
  discount: DataTypes.INTEGER,
  url: DataTypes.TEXT,
});

const Emails = sequelize.define("emails", {
  id_email: {
    type: DataTypes.INTEGER,
    unique: 'compositeIndex' 
  },
  email: DataTypes.TEXT,
});

const PhoneNumbers = sequelize.define("phone_numbers", {
  id_phone_number: {
    type: DataTypes.INTEGER,   
    references: {
      model: User,
      key: 'id_phone_number',
    }
  },
  phone_number: DataTypes.INTEGER,
},  { timestamps: false });

const PaymentCards = sequelize.define("payment_cards", {
  id_payment_card: {
    type: DataTypes.INTEGER,
    unique: 'compositeIndex', 
    references: {
      model: User,
      key: 'id_payment_card',
    }
  },
  number: DataTypes.INTEGER,
  MM_YY: DataTypes.INTEGER,
  cnn: DataTypes.INTEGER,
  zip: DataTypes.INTEGER,
});





User.hasMany(PhoneNumbers, {foreignKey: 'id_phone_number', sourceKey: 'id_phone_number'});
PhoneNumbers.belongsTo(User, {foreignKey: 'id_phone_number', targetKey: 'id_phone_number'});


module.exports = {
  User: User,
  Emails: Emails,
  PhoneNumbers: PhoneNumbers,
  PaymentCards: PaymentCards,
  HotelRooms: HotelRooms,   
  SaleRooms: SaleRooms,
};
       