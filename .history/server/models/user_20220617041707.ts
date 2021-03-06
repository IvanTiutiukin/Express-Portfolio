import mongoose, { PassportLocalModel, PassportLocalSchema } from 'mongoose';
const Schema = mongoose.Schema; // alias for mongoose.Schema
import passportLocalMongoose from 'passport-local-mongoose';

// Step 2 - Create a Schema that matches the data in the collection
const UserSchema = new Schema
({
    DisplayName: String,
    username: String,
    EmailAddress: String,
    Created: 
    {
        type: Date,
        default: Date.now()
    },
    Updated: 
    {
        type: Date,
        default: Date.now()
    }
},
{
    collection: "users"
});

// Step 3- Create a Model using the Schema
const Model = mongoose.model("User", UserSchema);

// Step 4 - Export the Model -> converts this file into a module
export default Model;