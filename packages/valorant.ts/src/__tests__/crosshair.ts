import { ValCrosshair } from "../index";

describe("valorant_ts.crosshair", () => {
    test("set", () => {
        const crosshair: ValCrosshair = new ValCrosshair();

        let index: Array<number> = [];

        crosshair.find((value, _index) => {
            if (value.value.name === "AimDownSights.CopyPrimaryCrosshair") {
                index = _index;
                return true;
            }

            return false;
        });

        expect(
            crosshair.map((_value, _index) => {
                if (_index.toString() === index.toString()) {
                    return _value;
                }
            })
        ).toStrictEqual([
            {
                type: "Boolean",
                value: {
                    path: "0.p",
                    priority: 1,
                    name: "AimDownSights.CopyPrimaryCrosshair",
                    data: 1,
                    default: 1
                },
                components: []
            }
        ]);

        crosshair.set(index, 0);

        expect(crosshair.find((_value, _index) => _index.toString() === index.toString())).toStrictEqual({
            type: "Boolean",
            value: {
                path: "0.p",
                priority: 1,
                name: "AimDownSights.CopyPrimaryCrosshair",
                data: 0,
                default: 1
            },
            components: []
        });
    });

    test("data", () => {
        const crosshair: ValCrosshair = new ValCrosshair();

        crosshair.import("0;s;1");

        expect(crosshair.find((value) => value.value.path === "0.s")).toStrictEqual({
            type: "Boolean",
            value: {
                path: "0.s",
                priority: 3,
                name: "General.Crosshair.UseAdvancedOptions",
                data: 1,
                default: 0
            },
            components: []
        });

        expect(crosshair.export()).toBe("0;s;1");
    });
});
