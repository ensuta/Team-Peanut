const Koa = require("koa");
const app = new Koa();

app.use(async (ctx, next) => {
    console.log(ctx.url);
    console.log("카나미는 키가 작다");
    if(ctx.query.authorized === 1){
        ctx.status = 401;
        return;
    }
    await next();
    console.log("끝");
})

app.use((ctx, next)=> {
    console.log("맥심은 초보다");
    next();
});

app.use(ctx => {
    ctx.body = "함멘은 여자다";
});

app.listen(1972, () => {
    console.log("Listen to port 1972");
})