const mongoose = require('mongoose');

const localUri = process.env.LOCAL_DB_URL || 'mongodb://localhost:27017/myApp';
const productionUri = process.env.DATABASE_URL|| '';
const collectionName = 'properties';

async function copyCollection() {
    try {
        // Connect to both local and production databases
        const localConnection = await mongoose.createConnection(localUri).asPromise();
        const productionConnection = await mongoose.createConnection(productionUri).asPromise();

        // Access the collection in the local database
        const localCollection = localConnection.collection(collectionName);
        const productionCollection = productionConnection.collection(collectionName);

        // Fetch all documents from the local collection
        const documents = await localCollection.find({}).toArray();

        if (documents.length > 0) {
            // Insert documents into the production collection
            await productionCollection.insertMany(documents);
            console.log(`Successfully copied ${documents.length} documents to the production database.`);
        } else {
            console.log('No documents found in the local collection.');
        }

        // Close the connections
        await localConnection.close();
        await productionConnection.close();
    } catch (error) {
        console.error('Error copying collection:', error);
    }
}

copyCollection();
