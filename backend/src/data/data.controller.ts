import { Controller, Get, Post, UseInterceptors, UploadedFile, Body, Param, Put, Delete,  Query, UseGuards } from '@nestjs/common';
import { Data } from '../../libs/models/data.model';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import * as xlsx from 'node-xlsx';
import { createDataDto } from '../../libs/dto/createdata.dto'
import { AuthGuard } from '@nestjs/passport';

@Controller('data')
@ApiTags('数据增删改查')
export class DataController {
  constructor(
    @InjectModel(Data) private readonly DataModel: ModelType<Data>
  ) { }

  @Get('fetch')
  @ApiOperation({ summary: '获取所有数据' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async getList(@Query('query') query: string) {
    const params = JSON.parse(query);
    const totalSkip = params.limit * (params.position - 1)
    const result = await this.DataModel   //根据条件筛选出想要的数据
      .find()
      .limit(params.limit)
      .skip(totalSkip)
      .where(params.where)

    const total = await this.DataModel   //统计符合where语句条件的总条数
      .where(params.where)
      .countDocuments(this.DataModel)
    const res = { 'total': total, 'result': result }
    return res
    // console.log(typeof(searchName))
  }

  @Get('statistic')
  @ApiOperation({ summary: '表格上面的统计图表功能' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async getStatistic(@Query('query') query: string,) {
    const params = JSON.parse(query);
    const statistic = await this.DataModel
    .aggregate([
      // {$match:{'projectName':params.where.projectName}},
      {$group:{_id:"$issueStatus",count: { $sum: 1 }}}])

    const res = {   //返回给表格上面的统计图表功能
      columns: ['_id', 'count'],
      rows: statistic
    }
    return res
  }

  @Get('schoolCard')
  @ApiOperation({ summary: '卡片' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async getSchoolList(@Query('query') query: string,) {
    const params = JSON.parse(query);
    const schoolList = await this.DataModel.distinct('schoolName')
    return schoolList
  }


  @Post()
  @ApiOperation({ summary: '上传信息' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async create(@Body() dto: createDataDto) {
    await this.DataModel.create(dto)
  }

  @Get(':id')
  @ApiOperation({ summary: '获取具体信息' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async detail(@Param('id') id: string) {
    return await this.DataModel.findById(id)
  }

  @Put(':id')
  @ApiOperation({ summary: '修改具体信息' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async update(@Param('id') id: string, @Body() dto: createDataDto) {
    return await this.DataModel.findByIdAndUpdate(id, dto)
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除具体信息' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async remove(@Param('id') id: string) {
    await this.DataModel.findByIdAndDelete(id)
  }

  // @Post('/upload')
  // @ApiOperation({ summary: '上传CVS文档接口' })
  // @UseInterceptors(FileInterceptor('file'))
  // async upload(@UploadedFile('file') file) {
  //   const result = file.buffer
  //   const obj = xlsx.parse(result)    //解析完成excel

  //   const excelObj = obj[0].data    //这是第一个sheet的数据

  //   const toMongo = {
  //     'projectName': '',
  //     'productName': '',
  //     'issueBrief': '',
  //     'issuePriority': '',
  //     'issueStatus': '',
  //     'issueType': '',
  //     'issueCreateTime': '',
  //     'issuePlanTime': '',
  //     'issueCloseTime': '',
  //     'issueSlution': '',
  //     'issueManager': '',
  //     'issueDepartment': '',
  //   }

  //   for (var j = 1; j <= obj.length; j++) {
  //     const excelObj = obj[j - 1].data      //[]中的数据需要通过加减操作，来表示它是数字
  //     for (var i = 3; i <= excelObj.length; i++) {
  //       const list = excelObj[i - 1]   //这是第二行数据
  //       toMongo['projectName'] = list[0]
  //       toMongo['productName'] = list[1]
  //       toMongo['issueBrief'] = list[2]
  //       toMongo['issuePriority'] = list[3]
  //       toMongo['issueStatus'] = list[4]
  //       toMongo['issueType'] = list[5]
  //       toMongo['issueCreateTime'] = list[6]
  //       toMongo['issuePlanTime'] = list[7]
  //       toMongo['issueCloseTime'] = list[8]
  //       toMongo['issueSlution'] = list[9]
  //       toMongo['issueManager'] = list[10]
  //       toMongo['issueDepartment'] = list[11]
  //       await this.DataModel.create(toMongo)
  //     }
  //   }
  //   // return excelObj.length
  // }


}


