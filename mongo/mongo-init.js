console.log(
  "Begin MongoDB Setup Process - >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
);

const nodebbUser = process.env["NODEBB_USERNAME"];
const nodebbPassword = process.env["NODEBB_PASSWORD"];

db = db.getSiblingDB("nodebb");

db.createUser({
  user: nodebbUser,
  pwd: nodebbPassword,
  roles: [
    { role: "readWrite", db: "nodebb" },
    { role: "clusterMonitor", db: "admin" },
  ],
});

db.createCollection("users");

console.log(
  "MongoDB Setup Process Complete - >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
);
