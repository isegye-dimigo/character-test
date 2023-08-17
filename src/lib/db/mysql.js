import mysql from "mysql2/promise";
import dotenv from 'dotenv'
dotenv.config()

/**
 * @type {Promise<mysql.Connection> | null}
 */
let mysqlconn = null;

export function mysqlconnFn() {
    if (!mysqlconn) {
        mysqlconn = mysql.createConnection({
            host: process.env.HOST,
            user: process.env.USER, 
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
        });
    }
    return mysqlconn;
}