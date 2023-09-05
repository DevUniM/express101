# ExpressJS Workshop

#### Commands
1. start - เริ่มต้นโปรแกรมที่เขียน
2. dev - run time
3. build - compile typescript to javascript
4. clean - ลบ node_modules กับ dist

#### Express Dependencies(libray)

- dependencies
    - express
    - cors
- devDependencies
    - @types/express
    - @types/cors

```cmd
pnpm add express
pnpm add express cors

# dev
pnpm add -D @types/express
```

## Cors
frontend -- http://localhost:3000
backend -- http://localhost:4000

```js
const main = async () => {
    console.log("test");
}
```

## ศัพท์
async 

## ตัวอย่าง
async , await
```ts
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

const returnStr = (str: any, callback?: (param: any) => void) => {
    // whatever function
    callback && callback(str);
    // whatever function
}

returnStr({
    start: true,
    message: "test"
}, (...data) => console.log(data[0]))

returnStr({
    start: true,
    message: "test"
}, console.log)
```