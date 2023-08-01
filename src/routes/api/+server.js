// @ts-nocheck
import { mysqlconnFn } from "$lib/db/mysql";
import {json} from '@sveltejs/kit';

export async function POST({ request }) {
    let mysqlconn = await mysqlconnFn();
    let headers;
    const cookieHeader = request.headers.get('cookie');
    console.log(cookieHeader);
    if(!cookieHeader){
        const oneHourFromNow = new Date(Date.now() + 60 * 60 * 1000);
        headers = {
            'Set-Cookie': `visited=true; Path=/;Expires=${oneHourFromNow.toUTCString()}; HttpOnly`
        };
        //방문자수 +1
        await mysqlconn
        .query("INSERT INTO visitor_record (date) VALUES (NOW());")
        .then(function ([rows, fields]) {
            console.log(rows);
        });
    }
    let results = await mysqlconn
    .query("SELECT * FROM visitor_record ORDER BY id DESC LIMIT 1;")
    .then(function ([rows, fields]) {
        console.log(rows);
        return rows;
    });
    const responseBody = JSON.stringify(results);
    const response = new Response(responseBody, {
        status: 200,
        headers: headers,
        statusText: 'OK',
    });
    return response;
}
