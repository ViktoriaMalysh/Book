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
},  
{ 
  timestamps: false
});


const UserRooms = sequelize.define('UserRooms', {
  // UserId: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: User, 
  //     key: 'id'
  //   }
  // },
  // RoomId: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: HotelRooms, 
  //     key: 'id'
  //   }
  // }
}, {  timestamps: false
});

User.belongsToMany(HotelRooms, { through: UserRooms });
HotelRooms.belongsToMany(User, { through: UserRooms });

// user.addHotelRooms(house);
// house.setUsers([user1, user2])

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

const UserPaymentCards = sequelize.define('UserPaymentCards', {
  UserId: {
    type: DataTypes.INTEGER,
    references: {
      model: User, 
      key: 'id'
    }
  },
  PaymentId: {
    type: DataTypes.INTEGER,
    references: {
      model: PaymentCards, 
      key: 'id'
    }
  }

});

User.belongsToMany(PaymentCards, { through: UserPaymentCards });
PaymentCards.belongsToMany(User, { through: UserPaymentCards });


// const Payment = User.hasMany(PaymentCards, {
//   foreignKey: {
//       name: 'id_user',
//       allowNull: false,
//       onDelete: 'CASCADE',
//       as: 'payment',
//   }
// });
//  User.sequelize.sync({ alter: true });
//  UserRooms.sequelize.sync({ alter: true });
//  HotelRooms.sequelize.sync({ alter: true });

// module.exports = { Payment }

module.exports = {
  User: User,   
  PaymentCards: PaymentCards,
  HotelRooms: HotelRooms,   
  SaleRooms: SaleRooms,
  UserRooms: UserRooms,
  UserPaymentCards: UserPaymentCards,
};
       