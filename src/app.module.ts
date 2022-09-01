import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/constants'

@Module({
  
  imports: [ 
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    TypeOrmModule.forRoot({
    type: "postgres",
    host: process.env.DB_HOST,
    // port: parseInt(process.env.DB_PORT, 10), port 5432
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true
  }),],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
