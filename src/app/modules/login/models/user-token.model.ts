import { User } from 'src/app/modules/task/models/user.model';

export interface UserToken {
  user: User;
  token: string;
}
