import { ApiProperty } from "@nestjs/swagger";

export class createDataDto {
  @ApiProperty({ description:'所属项目'})
  projectName: string
  @ApiProperty({ description:'产品名称'})
  productName: string
  @ApiProperty({ description:'问题描述'})
  issueBrief: string
  @ApiProperty({ description:'优先级'})
  issuePriority: string
  @ApiProperty({ description:'状态'})
  issueStatus: string
  @ApiProperty({ description:'分类'})
  issueType: string
  @ApiProperty({ description:'提出时间'})
  issueCreateTime: string
  @ApiProperty({ description:'目标时间'})
  issuePlanTime: string
  @ApiProperty({ description:'关闭时间'})
  issueCloseTime: string
  @ApiProperty({ description:'解决方案'})
  issueSlution: string
  @ApiProperty({ description:'责任人'})
  issueManager: string
  @ApiProperty({ description:'责任部门'})
  issueDepartment: string
  @ApiProperty({ description:'问题处理详情'})
  issueDetail: any
}

