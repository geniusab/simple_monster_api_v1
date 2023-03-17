# #!/bin/bash

database="monstersdb"

echo "Running configuration database: $database"

dropdb -U node_user monstersdb
echo "$database configured 1" 
createdb -U node_user monstersdb

psql -U node_user < ./bin/sql/monsters.sql

echo "$database configured"