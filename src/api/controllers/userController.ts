import {Request, Response} from "express";
import HttpStatus from "http-status-codes";
import User, {UserValidation} from "../../models/user";

class UserController {

    public async create(req: Request, res: Response): Promise<void> {
        try {
            console.log("test test test test")
            await UserValidation.validateAsync(req.body);// in catch e if not validated
            let user = await new User(req.body).save();
            res.status(HttpStatus.OK).send(user);
            
        } catch (e) {
            res.status(HttpStatus.BAD_REQUEST).send(e);
        }
    }




    public async findAll(req: Request, res: Response): Promise<void> {
        try {
            res.send(await User.find());
        } catch (e) {
            res.status(HttpStatus.BAD_REQUEST).send(e);
        }
    }
}

export default new UserController();
