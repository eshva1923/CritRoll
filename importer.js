const fs = require('firebase-admin');
const serviceAccount = require('./digitalrole-d6613-2c5e87614e56.json')

fs.initializeApp({
    credential: fs.credential.cert(serviceAccount)
});

const db = fs.firestore();

var jsonToImport = require('./.json');

const insertDB = db.collection('');

var testJSON =  {}


jsonToImport.forEach(function(obj) {
    insertDB.add ({
        actions: parseInt(obj.data.actions.value),
        description: obj.data.description.value,
        category: obj.data.actionCategory.value,
        name: obj.name,
        requirements: obj.data.requirements.value,
        rules: obj.data.rules,
        traits: obj.data.traits.value,
        type: obj.data.actionType.value
    }).then(function(docRef) {
        console.log("Written with id: ", docRef.id);
    })
    .catch(function(error) {
        console.error("error: ", error);
    });
});