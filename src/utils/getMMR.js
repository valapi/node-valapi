/**
 * @param {Number} Tier Tier
 * @param {Number} RankedRating Ranked Rating
 */
function execute(Tier, RankedRating) {
    if(!Tier && !RankedRating) {
        return NaN;
    }

    if (Tier >= 21) {
        return 1800 + RankedRating;
    }

    return (Tier * 100) - 300 + RankedRating;
}

module.exports = execute;