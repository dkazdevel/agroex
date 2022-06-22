export const numToEncode = 10;

export const expiresInForToken = '168h';

export const MAX_IMAGE_SIZE = 5242880;

export const enum ORDER {
  ASC = 'ASC',
  DESC = 'DESC',
}

export const enum ROLES_ID {
  USER = '1',
  ADMIN = '2',
  MODERATOR = '3',
}

export const enum MessageError {
  EMAIL_IS_TAKEN = 'This email is already taken',
  INCORRECT_DATA = 'You entered incorrect data',
  USER_ID_NOT_FOUND = 'User with this id not found',
  NOT_AUTHORIZED = 'Not authorized',
  ROLE_IS_ALREADY_ADDED = 'The user already has this role',
  ROLE_OR_USER_NOT_FOUND = 'User or role not found',
  USER_NOT_FOUND = 'User not found',
  ACCESS_DENIED = 'Access denied',
  ADVERTISEMENT_NOT_FOUND = 'This advertisement was not found',
  ERROR_WHILE_SAVING_ON_CLOUDINARY = 'Error while saving on cloudinary',
  HIGHER_PRICE_THAN_SELLER = 'Your price is higher than the seller',
  NEED_TO_REFRESH_THE_PAGE = 'Your bet failed, place a higher bet',
  ADVERTISEMENT_IS_ALREADY_MODERATED = 'Advertisement is already been moderated',
  ADVERTISEMENT_CAN_NOT_BE_CHANGED = 'Advertisement can not be changed',
  ADVERTISEMENT_IS_NOT_ACTIVE = 'Advertisement is not active',
  ADVERTISEMENT_ALREADY_CONFIRMED = 'Advertisement already confirmed',
  ADVERTISEMENT_HAS_NOT_BETS = 'Advertisement has no bets',
}

export const enum DB_RELATIONS {
  USER_ROLES = 'userRoles',
  ROLES = 'userRoles.role',
}

export const enum DB_RELATIONS_ADVERTISEMENTS_AND_USER_AND_BETS {
  TABLE = 'advertisements',
  USER = 'author',
  ISMODERATED = 'advertisements.isModerated = :isModerated',
  ISACTIVE = 'advertisements.isActive = :isActive',
  LEFT_JOIN_AND_SELECT = 'advertisements.author',
  LEFT_JOIN_AND_SELECT_USERBETS = 'advertisements.userBets',
  SORT_COLUMN_BY_UPDATED_AT = 'advertisements.updatedAt',
  USERBETS = 'userBets',
  USERBETS_IS_ACTIVE = 'userBets.isActive = :isActive',
  SORT_BETS_BY_CREATE_AT = 'userBets.created_at',
  ADVERT_SLUG = 'advertisements.slug = :slug',
}

export const enum HOST_URL {
  TEST_HOST = 'https://agroex-for-test.herokuapp.com',
  MAIN_HOST = 'https://agroex-backend.herokuapp.com',
  LOCAL_HOST = 'http://localhost:5000',
}

export const enum FILES_ERRORS {
  FILE_TYPE_IS_NOT_MATCHING = 'File type is not matching',
  FILE_EXPECTED = 'File expected',
}

export const enum NOTIFICATIONS_TITLES {
  TEST_TITLE = 'Hello everybody'
}

export const enum NOTIFICATIONS_MESSAGES {
  TEST_MESSAGE = 'You are on the my ads page :)',
  GO_TO_MY_BETTINGS_PAGE_NEW_BET = 'Go to My bettings page to see the new bet',
  GO_TO_MY_ADVERTISEMENTS_PAGE = 'Go to My advertisements page to see the new bet',
  GO_TO_MY_BETTINGS_PAGE_YOUR_BET = 'Go to My bettings page to see your bet',
  GO_TO_MY_ORDERS_PAGE = 'Go to My Orders page to see the deal',
  CHOOSE_ANOTHER_LOT = 'Choose another LOT'
}
