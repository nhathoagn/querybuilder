import { IsNumber, IsOptional, IsString } from 'class-validator';

export class RoomDataDTO {
  @IsNumber()
  roomId: number;

  @IsString()
  name: string;

  @IsOptional()
  description: string;
}
