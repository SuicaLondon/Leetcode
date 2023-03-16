function hardestWorker(n: number, logs: number[][]): number {
    let longest = logs[0];
    for (let i = 1; i < logs.length; i++) {
        let log = logs[i]
        let previousLog = logs[i - 1]
        let timeDifference = log[1] - previousLog[1]
        if (timeDifference > longest[1]) {
            longest = [log[0], timeDifference]
        } else if (timeDifference == longest[1]) {
            longest = [Math.min(log[0], longest[0]), timeDifference]
        }
    }
    return longest[0]
};

console.log(hardestWorker(10, [[0, 3], [2, 5], [0, 9], [1, 15]]))
console.log(hardestWorker(26, [[1, 1], [3, 7], [2, 12], [7, 17]]))
console.log(hardestWorker(2, [[0, 10], [1, 20]]))