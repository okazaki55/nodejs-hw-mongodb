const parseType = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return;
  const isContactType = (contactType) =>
    ['work', 'home', 'personal'].includes(contactType);

  if (isContactType(contactType)) return contactType;
};

const parseBoolean = (favourite) => {
  const isString = typeof favourite === 'string';
  if (!isString) return;
  if (favourite === 'true') return true;
  if (favourite === 'false') return false;
};

export const parseFilterParams = (query) => {
  const { name, phoneNumber, email, isFavourite, contactType } = query;

  const parsedIsFavourite = parseBoolean(isFavourite);
  const parsedType = parseType(contactType);
  const parsedName = parseType(name);
  const parsedPhoneNumber = parseType(phoneNumber);
  const parsedEmail = parseType(email);

  return {
    name: parsedName,
    phoneNumber: parsedPhoneNumber,
    email: parsedEmail,
    isFavourite: parsedIsFavourite,
    contactType: parsedType,
  };
};
