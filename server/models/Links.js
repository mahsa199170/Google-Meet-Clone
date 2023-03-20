import mongoose from "mongoose"; 


const UserSchema = new mongoose.Schema({

        name: {
          type: String,
          required: true,
        },
        link: {
          type: String,
          required: true,
          uniqu: true,
        },
        signalData: { 
          type: String 
        },
        expiration: {
          type: Date,
          expires: 86400,
          default: Date.now(),
        },
        participants: {
          type: Number,
          default: 0,
        },
      
      
    });



const UserModel = mongoose.model("users", UserSchema);
export default UserModel;


// need to create an index on the expiration field for MongoDB to be able to efficiently remove expired documents from the collection. Without the index, MongoDB would need to scan the entire collection to find and remove expired documents, which could be very slow and resource-intensive.
// in this example, we are re creating an index on the expiration field with a TTL of 0 seconds. This means that documents will be automatically removed from the collection once their expiration field has passed.
// Note that the index() method is called on the schema, not the model, and takes two arguments: the first is an object representing the keys to be indexed (in this case, just expiration), and the second is an options object that specifies the TTL (in this case, expireAfterSeconds: 0).