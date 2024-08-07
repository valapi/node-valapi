import { ValError } from "../client/ValError";

export const Default = <const>{
    White: "0",
    Green: "1",
    Yellow_Green: "2",
    Green_Yellow: "3",
    Yellow: "4",
    Cyan: "5",
    Pink: "6",
    Red: "7",
    Custom: "8"
};

export type Name = keyof typeof Default;
export type ID = (typeof Default)[Name];

export function fromName(x: Name): ID {
    return <ID>Default[x];
}

export function fromID(x: ID): Name {
    for (const data of Object.entries(Default)) {
        if (data[1] === x) {
            return <Name>data[0];
        }
    }

    throw new ValError({
        name: "Resource_Error",
        message: "Resource Not Found",
        data: x
    });
}
