export default class Data {
    // * change when having a new map
    public static readonly newmap = "undefined";

    public static readonly from = {
        unrated: "Unrated",
        competitive: "Competitive",
        spikerush: "Spikerush",
        deathmatch: "Deathmatch",
        ggteam: "Escalation",
        onefa: "Replication",
        snowball: "Snowball_Fight",
        swiftplay: "Swiftplay",
        hurm: "Team_Deathmatch",
        "": "Custom",
        tournamentmode: "Custom_Tournament",

        newmap: Data.newmap
    };

    public static readonly to = {
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
        Custom_Tournament: "tournamentmode"
    };
}

export enum Default {
    Unrated = "unrated",
    Competitive = "competitive",
    Spikerush = "spikerush",
    Deathmatch = "deathmatch",
    Escalation = "ggteam",
    Replication = "onefa",
    Snowball_Fight = "snowball",
    Swiftplay = "swiftplay",
    Custom = "",
    Custom_Tournament = "tournamentmode"
}

export type Identify = keyof typeof Data.from;
export type Name = keyof typeof Data.to | typeof Data.newmap;

/**
 * Change from {@link Name} to {@link Identify String}
 * @param {Name} x Name
 * @returns {Identify} String
 */
export function fromName(x: Name): Identify {
    if (x === Data.newmap) {
        return "newmap";
    }

    return <Exclude<Identify, "newmap">>Data.to[x];
}

/**
 * Change from {@link Identify String} to {@link Name}
 * @param {Identify} x String
 * @returns {Name} Name
 */
export function fromString(x: Identify): Name {
    if (x === "newmap") {
        return Data.newmap;
    }

    return <Name>Data.from[x];
}
