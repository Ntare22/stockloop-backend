import bcrypt from 'bcrypt';
import env from '../env';

export default class Crypt {
    static hashPassword(password) {
        return bcrypt.hashSync(password, Number(env.SALT));
    }

    static decodePassword(enteredPass, password) {
        return bcrypt.compareSync(enteredPass, password)
    }
}