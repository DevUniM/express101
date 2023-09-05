import Express from "express";
import type {
    Request, Response, Application
} from "express";

import cors from "cors";
import path from "path";

import { catController } from "./controllers/CatController";

const app: Application = Express();
const port: number = 5000;

app.use(Express.json());
app.use(
    Express.urlencoded({
        extended: true,
    }),
);

/**
 * origin - กำหนด URL ที่อณุญาติให้ใช้
 * credentials อนุญาตสามารถดึง cookie ๆลๆ มาทำงานใน backend ได้
 */
app.use(cors({
    origin: [
        "http://localhost:3000"
    ], 
    credentials: true,
}));

app.use(Express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



app.listen(port, () => {
    console.log("Server is running on port " + port);
    console.log("URL: http://localhost:" + port);
});

// Route http://localhost:4000/cats
app.use("/cats", catController);

// const sleep = async (ms: number) => {
//     return await new Promise((resolve) => setTimeout(resolve, ms))
// }

// const main = async (param1: number, callback: () => void) => {
//     console.log("Work in main func !"); // --- 1
//     console.log("number is " + param1); // --- 2
//     await sleep(param1);

//     callback(); // --- 3
// }

// // main(10000, () => {
// //     console.log("Callback Function")
// // });

const main = async () => {
    console.log(1);
    
    await new Promise((resolve) => {
        return setTimeout(() => {
            console.log(2);
            return resolve(null);
        }, 5000);
    })

    console.log(3);
}

// const returnStr = (str: any, callback?: (param: any) => void) => {
//     // whatever function
//     callback && callback(str);
//     // whatever function
// }

// returnStr({
//     start: true,
//     message: "test"
// }, (...data) => console.log(data[0]))

// returnStr({
//     start: true,
//     message: "test"
// }, console.log)

// main();