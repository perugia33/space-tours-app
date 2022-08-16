const { MongoClient } = require('mongodb');

async function main() {
  
    const  uri = "mongodb+srv://perugia33:stargazer11@space-tours.vzciu2g.mongodb.net/?retryWrites=true&w=majority"	;

    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

   
        await  listDatabases(client);

     
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);


// async function findOneUserByName(client, nameOfUser) {
    
//     const result = await client.db("user_data").collection("user").findOne({ name: nameOfUser });
//     if (result) {
//         console.log(`Found a user in the collection with the name '${nameOfUser}':`);
//         console.log(result);
//     } else {
//         console.log(`No listings found with the name '${nameOfUser}'`);
//     }
// }

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};


