import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    username : String,
    hashedPassword : String,
})

userSchema.methods.setPassword = async function(password){
    const has = await bcrypt.hash(password, 10);
    this.hashedPassword = hash;
}

userSchema.checkPassword = async function(password){
    const result = await bcrypt.compare(password, this.hashedPassword);
    return result;
}

userSchema.statics.findByUsername = function(username){
    return this.findOne({ username });
}

const User = mongoose.model('User', userSchema);

export default User;