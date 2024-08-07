import { ValError } from "../client/ValError";

export const Default = <const>{
    Unrated: "unrated",
    Competitive: "competitive",
    Spikerush: "spikerush",
    Deathmatch: "deathmatch",
    Escalation: "ggteam",
    Replication: "onefa",
    Snowball_Fight: "snowball",
    Swiftplay: "swiftplay",
    Team_Deathmatch: "hurm",
    Custom: "",
    Custom_Tournament: "tournamentmode",

    New_Map: "newmap"
};

export type Name = keyof typeof Default;
export type ID = Exclude<(typeof Default)[Name], (typeof Default)["New_Map"] | "">;

export function fromName(x: Name, newMapID: string = "abyss"): ID {
    if (x === "New_Map") {
        return <ID>newMapID;
    }

    return <ID>Default[x];
}

export function fromID(x: ID, newMapID: string = "abyss"): Name {
    for (const data of Object.entries(Default)) {
        if (data[1] === "newmap" && x === newMapID) {
            return "New_Map";
        }

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
