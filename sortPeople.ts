function sortPeople(names: string[], heights: number[]): string[] {
    for (let i = 0; i < names.length - 1; i++) {
        for (let j = 0; j < names.length - 1 - i; j++) {
            if (heights[j] < heights[j + 1]) {
                [names[j], names[j + 1]] = [names[j + 1], names[j]];
                [heights[j], heights[j + 1]] = [heights[j + 1], heights[j]];
            }
        }
    }
    return names
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]))
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]))
console.log(sortPeople(["IEO", "Sgizfdfrims", "QTASHKQ", "Vk", "RPJOFYZUBFSIYp", "EPCFFt", "VOYGWWNCf", "WSpmqvb"]
    , [17233, 32521, 14087, 42738, 46669, 65662, 43204, 8224]))