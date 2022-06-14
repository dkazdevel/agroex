import { AdvertisementsEntity } from '../advertisements.entity';
import { UserBetEntity } from '../../bets/user-bet.entity';
import { Optional } from '../../interfacesAndTypes/optional.interface';

export interface AdvertResponseInterface {
  advertisement: {
    id: number;
    title: string;
    slug: string;
    category: string;
    subCategory: string;
    country: string;
    location: string;
    isModerated: boolean;
    isActive: boolean;
    moderationComment: Optional<string>;
    price: number;
    currency: string;
    img: string;
    quantity: number;
    unit: string;
    createAt: Date;
    updatedAt: Date;
    expireAdvert: Date;
    author: {
      id: number;
      email: string;
      username: string;
      phone: string;
      image: string;
      banned: boolean;
      banReason: string;
    };
    userBets: UserBetEntity[];
  };
}

export interface AdvertResponseInterfaceForCreate {
  advertisement: {
    status: string;
    id_advertisement: number;
    slug: string;
  };
}

export interface AdvertsResponseInterface {
  advertisements: AdvertisementsEntity[];
  advertisementCount: number;
}

export interface QueryInterface {
  authorId: number;
  limit: number;
  offset: number;
}
