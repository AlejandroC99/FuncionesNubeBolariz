const aws = require("aws-sdk");
const dynamoDB = new aws.DynamoDB({
  region: "us-east-2",
  apiVersion: "2012-08-10",
});

exports.handler = (event, context, callback) => {
  const params = {
    Item: {
      Email: {
        S: event.Email,
      },
      name: {
        S: event.name,
      },
      address: {
        S: event.address,
      },
      telephone: {
        S: event.telephone,
      },
      creditcard: {
        S: event.creditcard,
      },
      origen: {
        S: event.origen,
      },
      destino: {
        S: event.destino,
      },
      hour: {
        S: event.hour,
      },
      date: {
        S: event.date,
      },
      seats: {
        S: event.seats,
      },
    },
    TableName: "BOLARIZ",
  };

  dynamoDB.putItem(params, function (err, data) {
    if (err) {
      console.log(err, err.stack, event); // an error occurred
      callback(err);
    } else {
      console.log(data); // successful response
      callback(null, data);
    }
  });
};
