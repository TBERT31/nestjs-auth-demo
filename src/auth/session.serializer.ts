import { PassportSerializer } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";

@Injectable()
export class SessionSerializer extends PassportSerializer {
    serializeUser(user: any, done: (err: Error | null, user: any) => void): any {
        done(null, {id: user.id});
    }

    deserializeUser(payload: any, done: (err: Error | null, payload: string) => void): any {
        done(null, payload);
    }
}