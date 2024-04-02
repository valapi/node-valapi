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

    // * change when having a new map
    New_Map: null
};

export type Name = keyof typeof Default;
export type ID = Exclude<(typeof Default)[Name], (typeof Default)["New_Map"]>;

/**
 * Change from {@link Name} to {@link ID}
 * @param {Name} x Name
 * @returns {ID} ID
 */
export function fromName(x: Name): ID | undefined {
    return <ID>Default[x];
}

/**
 * Change from {@link ID} to {@link Name}
 * @param {ID} x ID
 * @returns {Name} Name
 */
export function fromID(x: ID): Name | undefined {
    for (const data of Object.entries(Default)) {
        if (typeof data[1] == "string" && data[1] == x) {
            return <Name>data[0];
        }
    }

    return undefined;
}
