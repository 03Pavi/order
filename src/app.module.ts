import { Module } from '@nestjs/common';
import { IsNumber, IsString, validateSync } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import  dbConfig from './shared/database/db-config';

class EnvironmentVariables {
  @IsString()
  DB_HOST: string;

  @IsNumber()
  DB_PORT: number;

  @IsString()
  DB_USERNAME: string;

  @IsString()
  DB_PASSWORD: string;

  @IsString()
  DB_NAME: string;

  @IsString()
  JWT_ACCESS_TOKEN_SECRET: string;

  @IsNumber()
  JWT_ACCESS_TOKEN_EXPIRATION_TIME: number;

  @IsString()
  JWT_REFRESH_TOKEN_SECRET: string;

  @IsNumber()
  JWT_REFRESH_TOKEN_EXPIRATION_TIME: number;
}

function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: dbConfig,
    }),
    ConfigModule.forRoot({
      validate,
      isGlobal: true,
      expandVariables: true,
      load: [dbConfig],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
