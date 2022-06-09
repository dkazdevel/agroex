export const numToEncode = 10;

export const expiresInForToken = '168h';

export const MAX_IMAGE_SIZE=5242880;

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
    NEED_TO_REFRESH_THE_PAGE = 'Refresh the page, bets have already changed',
}

export const enum DB_RELATIONS {
    USER_ROLES = 'userRoles',
    ROLES = 'userRoles.role',
}

export const enum DB_RELATIONS_ADVERTISEMENTS_AND_USER {
    TABLE = 'advertisements',
    USER = 'author',
    ISMODERATED = 'advertisements.isModerated = :isModerated',
    LEFT_JOIN_AND_SELECT = 'advertisements.author',
    LEFT_JOIN_AND_SELECT_USERBETS = 'advertisements.userBets',
    SORT_COLUMN_BY_CREATE_AT = 'advertisements.createAt',
    USERBETS = 'userBets',
    USERBETS_IS_ACTIVE = 'userBets.isActive = :isActive',
    SORT_BETS_BY_CREATE_AT = 'userBets.created_at',
}

export const enum HOST_URL {
    TEST_HOST = 'https://agroex-for-test.herokuapp.com',
    MAIN_HOST = 'https://agroex-backend.herokuapp.com',
    LOCAL_HOST = 'http://localhost:5000'
}

export const enum FILES_ERRORS {
    FILE_TYPE_IS_NOT_MATCHING = 'File type is not matching',
    FILE_EXPECTED = 'File expected'
}
