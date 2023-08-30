#!/bin/bash
set -x

echo "Beginning MongoDB configuration for NodeBB - Quack!"
echo ">>>>>>>>>>>>>>>>>>>>o<<<<<<<<<<<<<<<<<<<<"

mongosh << EOF

use $NODEBB_DATABASE

db.createUser({
  user: "$NODEBB_USERNAME",
  pwd: "$NODEBB_PASSWORD",
  roles: [
    { role: "readWrite", db: "nodebb" },
    { role: "clusterMonitor", db: "admin" },
  ],
})

db.createCollection("users")

EOF

echo "MongoDB Setup Complete! Quack Quack!"