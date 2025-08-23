const QUANTITY_DESCRIPTION_PHOTO = 25;

const INITIAL_COMMENTS_QUANTITY = 0;
const FINAL_COMMENTS_QUANTITY = 30;

const INITIAL_URL_AVATAR = 1;
const FINAL_URL_AVATAR = 6;

const INITIAL_ID_PHOTO = 1;
const FINAL_ID_PHOTO = 25;

const INITIAL_URL_PICTURE = 1;
const FINAL_URL_PICTURE = 25;

const INITIAL_LIKES_QUANTITY = 15;
const FINAL_LIKES_QUANTITY = 200;

const DESCRIPTION_PHOTO = [
  'Ноги сфоткал?',
  'Лето',
  'Море',
  'Пустота',
  'Сила',
  'Если выйдет',
];

const MESSAGE_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAME_COMMENTS = [
  'Алексей',
  'Наталья',
  'Дмитрий',
  'Иван',
  'Варфаламей',
  'ДетективныйДетектив',
  'ПечнойДраник'
];

const getCounter = () => {
  let count = 0;
  return () => count++;
};

const commentId = getCounter();

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getUniqueRandomIntegerInRange = (min, max) => {
  let currentNumber = getRandomInteger(min, max);
  const uniqueNumber = [];
  return () => {
    if (uniqueNumber.length >= (max - min + 1)) {
      console.error('Перебран весь диапазон чисел');
      return null;
    }
    while (uniqueNumber.includes(currentNumber)) {
      currentNumber = getRandomInteger(min, max);
    }
    uniqueNumber.push(currentNumber);
    return currentNumber;
  };
};

const photoId = getUniqueRandomIntegerInRange(INITIAL_ID_PHOTO, FINAL_ID_PHOTO);
const photoUrl = getUniqueRandomIntegerInRange(INITIAL_URL_PICTURE, FINAL_URL_PICTURE);

const createRandomElement = (element) => {
  return element[getRandomInteger(0, element.length - 1)];
};

const makeListComment = () => {
  return {
    id: commentId(),
    avatar: `img/avatar-${getRandomInteger(INITIAL_URL_AVATAR, FINAL_URL_AVATAR)}.svg`,
    message: createRandomElement(MESSAGE_COMMENTS),
    name: createRandomElement(NAME_COMMENTS),
  };
};

const getComment = () => Array.from({length: getRandomInteger(INITIAL_COMMENTS_QUANTITY, FINAL_COMMENTS_QUANTITY)}, makeListComment);

const makeDescriptionPhoto = () => {
  return {
    id: photoId(),
    url: `photos/${photoUrl()}.jpg`,
    description: createRandomElement(DESCRIPTION_PHOTO),
    likes: getRandomInteger(INITIAL_LIKES_QUANTITY, FINAL_LIKES_QUANTITY),
    comments: getComment(),
  };
};

const getDescriptionPhoto = () => Array.from({length: QUANTITY_DESCRIPTION_PHOTO}, makeDescriptionPhoto);
console.log(getDescriptionPhoto());
