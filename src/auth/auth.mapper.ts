import { UserEntity } from '../user/user.entity';
import { UserResponseInterface } from './interfacesAndTypes/userResponse.interface';

export const userToRegistration = (
  user: UserEntity,
  token: string,
): UserResponseInterface => ({
  user: {
    id: user.id,
    username: user.username,
    phone: user.phone,
    email: user.email,
    token: token,
    image: user.image,
  },
});