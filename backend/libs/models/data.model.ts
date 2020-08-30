import { prop } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

export class Data {
  @ApiProperty({ description:'所属项目'})
  @prop()
  projectName: string
  @ApiProperty({ description:'产品名称'})
  @prop()
  productName: string
  @ApiProperty({ description:'问题描述'})
  @prop()
  issueBrief: string
  @ApiProperty({ description:'优先级'})
  @prop()
  issuePriority: string
  @ApiProperty({ description:'状态'})
  @prop()
  issueStatus: string
  @ApiProperty({ description:'分类'})
  @prop()
  issueType: string
  @ApiProperty({ description:'提出时间'})
  @prop()
  issueCreateTime: string
  @ApiProperty({ description:'目标时间'})
  @prop()
  issuePlanTime: string
  @ApiProperty({ description:'关闭时间'})
  @prop()
  issueCloseTime: string
  @ApiProperty({ description:'解决方案'})
  @prop()
  issueSlution: string
  @ApiProperty({ description:'责任人'})
  @prop()
  issueManager: string
  @ApiProperty({ description:'责任部门'})
  @prop()
  issueDepartment: string
}

