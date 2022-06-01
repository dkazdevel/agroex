import {BeforeUpdate, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "../user/user.entity";
import {UserResponseInterface} from "../auth/interfacesAndTypes/userResponse.interface";

@Entity({name: 'advertisements'})
export class AdvertisementsEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column("varchar", { length: 200 })
    title: string;

    @Column({unique: true})
    slug: string

    @Column({ default: null })
    category: string

    @Column({ default: null })
    subCategory: string

    @Column({ default: null })
    description: string;

    @Column({ default: false })
    isModerated: boolean

    @Column('decimal', {precision: 18, scale: 2})
    price: number;

    @Column("varchar", { length: 3 })
    currency: string;

    @Column()
    img: string;

    @Column('decimal', {precision: 18, scale: 2})
    quantity: number;

    @Column("varchar", { length: 5 })
    unit: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createAt: Date

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    updatedAt: Date

    @BeforeUpdate()//чтобы автоматически обновлять updatedAt
    updateTimestamp() {
        this.updatedAt = new Date();
    }

    @ManyToOne(() => UserEntity, user => user.advertisements, {eager: true})
    author: UserEntity
}