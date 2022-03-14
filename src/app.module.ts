import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MakeModule } from './make/make.module';


@Module({
    imports:     [
        TypeOrmModule.forRoot(),
        MakeModule
    ],
})
export class AppModule {}
