import mongoose from 'mongoose';
var moiveInfo = mongoose.model('movieInfo',movieInfoSchema);

const UserSchema = new mongoose.Schema({
    favorite:{
        type: moiveInfo,
        required:true,
    },
    userId:{
        type: String,
        required:true,
    },
});

export default mongoose.model('UserSchema', UserSchema);
