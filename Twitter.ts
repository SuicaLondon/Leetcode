type User = {
    userId: number
    followee: { number: User }
    follower: { number: User }
}

type Tweet = {
    userId: number
    tweetId: number
}

class Twitter {
    users: { number?: User }
    tweets: Tweet[]
    constructor() {
        this.users = {}
        this.tweets = []
    }

    getUser(userId: number): User {
        if (this.users[userId] == undefined) {
            this.users[userId] = {
                userId,
                followee: [],
                follower: []
            }
        }
        return this.users[userId]
    }

    postTweet(userId: number, tweetId: number): void {
        const newTweet = { userId, tweetId }
        this.getUser(userId)
        this.tweets.push(newTweet)
    }

    getNewsFeed(userId: number): number[] {
        let list: number[] = []
        for (let index = this.tweets.length - 1; index >= 0; index--) {
            const tweet = this.tweets[index]
            const posterId = tweet.userId
            const user = this.users[userId]
            if (posterId == userId || user.followee[posterId] != null) list.push(tweet.tweetId)
            if (list.length == 10) return list
        }
        return list
    }

    follow(followerId: number, followeeId: number): void {
        if (this.users[followerId] == undefined) {
            this.users[followerId] = {
                followerId,
                tweets: [],
                followee: {},
                follower: {}
            }
            console.log('create', this.users[followerId])
        }
        if (this.users[followeeId] == undefined) {
            this.users[followeeId] = {
                followeeId,
                tweets: [],
                followee: {},
                follower: {}
            }
        }
        this.getUser(followerId).followee[followeeId] = this.users[followeeId]
        this.getUser(followeeId).follower[followerId] = this.users[followerId]
    }

    unfollow(followerId: number, followeeId: number): void {
        delete this.users[followerId].followee[followeeId]
        delete this.users[followeeId].follower[followerId]
    }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

const twitter = new Twitter();
twitter.postTweet(1, 5) // User 1 posts a new tweet (id = 5).
console.log(twitter.getNewsFeed(1))  // User 1's news feed should return a list with 1 tweet id -> [5]. return [5]
twitter.follow(1, 2)    // User 1 follows user 2.
twitter.postTweet(2, 6) // User 2 posts a new tweet (id = 6).
console.log(twitter.getNewsFeed(1))  // User 1's news feed should return a list with 2 tweet ids -> [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
twitter.unfollow(1, 2)  // User 1 unfollows user 2.
console.log(twitter.getNewsFeed(1))  // User 1's news feed should return a list with 1 tweet id -> [5], since user 1 is no longer following user 2.