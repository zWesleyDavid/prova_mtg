<<<<<<< HEAD
import { SetMetadata } from '@nestjs/common';
import { Role } from '../enums/roles.enum';

export const ROLES_KEY = 'roles';
=======
import { SetMetadata } from '@nestjs/common';
import { Role } from '../enums/roles.enum';

export const ROLES_KEY = 'roles';
>>>>>>> c97005e54684d39103809c27e2c9aa6fbec032d4
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);