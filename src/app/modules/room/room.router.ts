import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { RoomZodValidation } from './room.zodValidation';
import { RoomController } from './room.controller';

const router = express.Router();

router.post(
  '/create-room',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(RoomZodValidation.createRoom),
  RoomController.createRoom
);

router.get('/', RoomController.getAllRoom);
router.get('/:id', RoomController.getSingleRoom);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(RoomZodValidation.updateRoom),
  RoomController.updateRoom
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  RoomController.deleteRoom
);

export const RoomRouter = router;
