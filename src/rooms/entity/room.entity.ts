import { MessageEntity } from 'src/message/entity/message.entity';
import { Participant } from 'src/room_user/room_user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { JoinedRoomEntity } from '../../join-room/entity/joinRoom.entity';

@Entity()
export class RoomEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => MessageEntity, (mess) => mess.room)
  message: MessageEntity[];

  @OneToMany(() => JoinedRoomEntity, (joinedRooms) => joinedRooms.room)
  joinedUser: JoinedRoomEntity[];

  @OneToMany(() => Participant, (participant) => participant.room)
  participant: Participant[];
}
