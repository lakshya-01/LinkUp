import mysql2 from "mysql2"

export const db = mysql2.createConnection({
  host:"localhost",
  user:"root",
  password:"Lak@2273",
  database:"social"
});
