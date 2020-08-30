import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication  } from '@nestjs/platform-express';



async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors()
  app.useStaticAssets('admin', { prefix: '/admin' }); 
  app.useStaticAssets('libs/img', { prefix: '/img' });//前面的libs/img是路径，后面的前缀表示访问libs/img里面的文件用什么前缀
    
 
  const options = new DocumentBuilder()
    .setTitle('API接口调试')
    .setDescription('The API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  //使用.env里的参数
  const PORT = process.env.SERVER_PORT || 80
  await app.listen(PORT);
  console.log(`http://localhost:${PORT}/api-docs`)
}
bootstrap();
