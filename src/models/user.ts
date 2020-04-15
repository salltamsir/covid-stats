import mongoose from 'mongoose';
import Schema from 'mongoose';
import Joi, {ObjectSchema} from '@hapi/joi';

const User = new mongoose.Schema({
    name: String,
    prenom: String,

});





export const UserValidation: ObjectSchema = Joi.object({
    name: Joi.string().required(),
    prenom: Joi.string().required()
});

export default mongoose.model<mongoose.Document & any>('User', User);
