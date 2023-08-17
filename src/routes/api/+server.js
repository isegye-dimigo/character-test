// @ts-nocheck
import { mysqlconnFn } from "$lib/db/mysql";

export async function POST({ request }) {
    let mysqlconn = await mysqlconnFn();
    let headers;
    const cookieHeader = request.headers.get('cookie');
    console.log(cookieHeader);
    if(!cookieHeader){
        const oneHourFromNow = new Date(Date.now() + 60 * 60 * 1000);
        headers = {
            'Set-Cookie': `visited=true; Path=/;Max-Age=${oneHourFromNow.toUTCString()}; HttpOnly`
        };
        //방문자수 +1   
        await mysqlconn
        .query("INSERT INTO visitor_record (date) VALUES (NOW());")
        .then(function ([rows]) {
            console.log(rows);
        });
    }
    const results = await mysqlconn
    .query("SELECT COUNT(*) as count FROM visitor_record;")
    .then(function ([rows]) {
        console.log(rows[0]['count']);
        return rows[0]['count'];
    });
    const responseBody = JSON.stringify(results);
    const response = new Response(responseBody, {
        status: 200,
        headers: headers,
        statusText: 'OK',
    });
    return response;
}