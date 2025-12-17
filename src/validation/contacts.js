import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string().min(3).max(20).required(),
  email: Joi.string()
    .min(3)
    .max(20)
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  isFavourite: Joi.boolean(),
  contactType: Joi.string()
    .min(3)
    .max(20)
    .valid('work', 'home', 'personel')
    .required(),
  parentId: Joi.string().required(),
});

const dataToValidate = {
  page: 2,
  perPage: 4,
  totalItems: 6,
  totalPages: 2,
  hasPreviousPage: true,
  hasNextPage: false,
};

const validationResult = createContactSchema.validate(dataToValidate);
if (validationResult.error) {
  console.error(validationResult.error.message);
} else {
  console.log('Data is valid!');
}

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().min(3).max(20),
  email: Joi.string()
    .min(3)
    .max(20)
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().min(3).max(20).valid('work', 'home', 'personel'),
});
