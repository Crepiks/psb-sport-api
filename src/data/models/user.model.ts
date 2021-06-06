import { Model } from 'objection';

class UserModel extends Model {
  static tableName = 'users';

  id: number;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  createdAt: string;
}

module.exports = UserModel;
export default UserModel;
