const mongoose = require('mongoose');

const DB = process.env.DATABASE;

// to connect using promises
// mongoose.connect(DB, {
//     useNewUrlParser: true,
//     // useCreateIndex: true,
//     useUnifiedTopology: true,
//     // useFindAndModify: false,
// }).then(() => {
//     console.log("Connected to DB");
// }).catch((err) =>{
//     console.log("Error");
// });

// connecting to DB using async await()
const connectToDB = async () => {
    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            // useCreateIndex: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
        });
        console.log("Connected to DB");
    } catch (err) {
        console.error(`Error connecting : ${err}`);
    }
};

// Call the function
connectToDB();


