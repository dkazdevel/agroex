import {Optional} from "../../interfacesAndTypes/optional.interface";
import {cronJobName} from "../../cron-jobs/types/cronjob.types";

export interface OrdersInterface {
    id: number,
    img: string,
    createAt: Date,
    updatedAt: Date,
    authorId: number,
    title: string,
    price: string,
    currency: string,
    quantity: string,
    unit: string,
    slug: string,
    category: string,
    subCategory: Optional<string>,
    isModerated: boolean,
    country: string,
    location: string,
    moderationComment: Optional<string>,
    isActive: boolean,
    expireAdvert: Date,
    isConfirmed: boolean,
    email: string,
    username: string,
    phone: string,
    password: string,
    image: Optional<string>,
    banned: boolean,
    banReason: Optional<string>,
    user_id: number,
    created_at: Date,
    expireBet: Date,
    betValue: string,
    advertisement_id: number,
    order_bet_id: number,
    dealStatus: string,
    bet_id: number
    orderCreated: Date
}

export interface OrderSaving {
    bet_id: number;
    // dealStatus: 'confirmed' | 'unconfirmed';
}