exports = (event) => {
    let collection = context.services.get("mongodb-atlas").db("bolariz").collection("ssugerencias");
    const params = EJSON.parse(event.body.text());
        
    collection.insertOne(params, function(err, res) {
    if (err) throw err;
    console.log("c logró");
    db.close();
        });

};