    const {MongoClient} = require('mongodb');

    async function main(){
    
         const  uri = "mongodb+srv://perugia33:stargazer11@space-tours.vzciu2g.mongodb.net/?retryWrites=true&w=majority"	;
 
        const client = new MongoClient(uri);
    
        try {
            // Connect to the MongoDB cluster
            await client.connect();
    
            await createUser(client,
                {
                    name: "Kamilah Falls",
                    email: "kf32@awake.com",
                    destination: "Stephan's Quintet",
                    passengers: 3
                }
            );
      
        } finally {
            // Close the connection to the MongoDB cluster
            await client.close();
        }
    }
    
    main().catch(console.error);


    async function createUser( client, newUser) {
       const result = await  client.db("user_data").collection("user").insertOne(newUser);
       console.log(`New User created with the id : ${result.insertedId}`)

}



