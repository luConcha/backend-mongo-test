const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      requiered: [true, 'Por favor teclea un nombre'],
    },
    email: {
      type: String,
      unique: true,
      requiered: [true, 'Por favor teclea un email'],
    },
    password: {
      type: String,
      requiered: [true, 'Por favor teclea un password'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema); //siempre primera letra mayuscula y palabra en singular
