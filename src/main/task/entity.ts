import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryColumn('varchar')
  id: string;

  @Column('text')
  text: string;

  @Column('boolean')
  completed: boolean;
}
