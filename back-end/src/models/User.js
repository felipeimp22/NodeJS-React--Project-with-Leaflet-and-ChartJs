import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const BidSchema = new mongoose.Schema({
  email: {
    type: String
  },
  bid: {
    type: Array
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
})
mongoose.model('Bid', BidSchema);

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  deleted: {
    type: Boolean,
    default: false
  },
  lastLogin: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

UserSchema.plugin(mongoosePaginate);

mongoose.model('User', UserSchema);
/**
 * 
 * ------------------------------------------------------------------------
 * 
 */
import bcrypt from 'bcryptjs';
import { array } from 'yup';

const User = mongoose.model('User')


const findADM = User.where({ name: "admin" })

let password = "admin"

findADM.findOne(
  async function (err, Adm) {
    if (err) { return console.log(err); }

    password = await bcrypt.hash(password, 8)

    if (!Adm) {
      await new User({
        name: "admin",
        email: "admin@admin.com",
        password: password

      }).save()
      console.log("adm created")

    }
  }

)
//

// new User({
//   name: "admin",
//   email: "admin@admin.com",
//   password: "admin"

// }).save()

