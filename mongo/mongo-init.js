console.log(
  "Begin MongoDB Setup Process - >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
);

db = db.getSiblingDB("nodebb");

db.createUser({
  user: "nodebb",
  pwd: "Testing1234!",
  roles: [
    { role: "readWrite", db: "nodebb" },
    { role: "clusterMonitor", db: "admin" },
  ],
});

db.createCollection("users");

console.log(
  "MongoDB Setup Process Complete - >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
);
