import { Router } from 'express';
import {
  getContactsController,
  getContactsByIdController,
  createContactController,
  deleteContactControlller,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createContactSchema } from '../validation/contacts.js';
import { updateContactSchema } from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';
import { checkRoles } from '../middlewares/checkRoles.js';
import { ROLES } from '../constants/index.js';

const router = Router();

router.use(authenticate);

router.get('/', checkRoles(ROLES.ADMIN), ctrlWrapper(getContactsController));

router.get(
  '/:contactId',
  checkRoles(ROLES.ADMIN, ROLES.PARENT),
  isValidId,
  ctrlWrapper(getContactsByIdController),
);

router.post(
  '/register',
  checkRoles(ROLES.ADMIN),
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

router.delete(
  '/:contactId',
  checkRoles(ROLES.ADMIN),
  isValidId,
  ctrlWrapper(deleteContactControlller),
);

router.patch(
  '/:contactId',
  checkRoles(ROLES.ADMIN, ROLES.PARENT),
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);

export default router;
