import { ApiProperty } from "@nestjs/swagger";

export class findDataDto{
  @ApiProperty({description:'每页显示条目数'})
  limit:number
  @ApiProperty({description:'当前页数'})
  position:number
}