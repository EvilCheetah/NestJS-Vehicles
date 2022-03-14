import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MakeModule } from './make/make.module';
import { ModelModule } from './model/model.module';


@Module({
    imports:     [
        TypeOrmModule.forRoot(),
        MakeModule,
        ModelModule
    ],
})
export class AppModule {}
