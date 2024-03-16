import { DefaultUser } from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user?: DefaultUser & {
            id: string;
            name: string;
            surname: string;
            email: string;
            emailVerified: Date;
            phoneNumber: number;
            phoneNumberVerified: Date;
            password: string;
            pp: string;
            banner: string;
            role: string;
            balance: number;
            createdAt: Date;
            updatedAt: Date;
        };
    };
    interface User extends DefaultUser {
        id: string;
            name: string;
            surname: string;
            email: string;
            emailVerified: Date;
            phoneNumber: number;
            phoneNumberVerified: Date;
            password: string;
            pp: string;
            banner: string;
            role: string;
            balance: number;
            createdAt: Date;
            updatedAt: Date;
    };
};
declare module "next-auth/jwt" {
    interface JWT {
        id: string;
            name: string;
            surname: string;
            email: string;
            emailVerified: Date;
            phoneNumber: number;
            phoneNumberVerified: Date;
            password: string;
            pp: string;
            banner: string;
            role: string;
            balance: number;
            createdAt: Date;
            updatedAt: Date;
    };
};