export const config = ()=>({
    database :{
        type: "postgres",
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: ["dist/**/*.entity{.ts,.js}"],
        synchronize: true
    }

})