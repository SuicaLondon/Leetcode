import UIKit

class Solution {
    func multiply(_ num1: String, _ num2: String) -> String {
        var timedNumber = 0
        var sumNumber = 0
        var advancedNumber = 0
        let na1 = Array(num1)
        let na2 = Array(num2)
        print(na1, na2)
        for (n2Index, ns2) in na2.enumerated().reversed(){
            for (n1Index, ns1) in na1.enumerated().reversed() {
                guard let n1 = ns1.wholeNumberValue, let n2 = ns2.wholeNumberValue else { return "" }
                timedNumber = n1 * n2
                if advancedNumber > 0 {
                    timedNumber = timedNumber + advancedNumber
                    advancedNumber = 0
                }
                if n1Index != 0 && n2Index != 0 && timedNumber > 10 {
                    advancedNumber = Int(floor(Double(timedNumber/10)))
                    timedNumber = timedNumber % 10
                }
                sumNumber += Int(truncating: pow(10, num1.count - n1Index - 1) * pow(10, num2.count - n2Index - 1) as NSDecimalNumber) * timedNumber
                timedNumber = 0
            }
            print("sumNumber", sumNumber)
        }
        return String(sumNumber)
    }
    
    func multiply(_ na1: Array<String>, _ na2: Array<String>) -> String {
        var timedNumber = 0
        var sumNumber = 0
        var advancedNumber = 0
        let num1 = na1.joined()
        let num2 = na2.joined()
        print(na1, na2)
        for (n2Index, ns2) in na2.enumerated().reversed(){
            for (n1Index, ns1) in na1.enumerated().reversed() {
                let n1 = Int(ns1)
                let n2 = Int(ns2)
                timedNumber = n1! * n2!
                if advancedNumber > 0 {
                    timedNumber = timedNumber + advancedNumber
                    advancedNumber = 0
                }
                if n1Index != 0 && n2Index != 0 && timedNumber > 10 {
                    advancedNumber = Int(floor(Double(timedNumber/10)))
                    timedNumber = timedNumber % 10
                }
                sumNumber = sumNumber + Int(truncating: pow(10, num1.count - n1Index - 1) * pow(10, num2.count - n2Index - 1) as NSDecimalNumber) * timedNumber
                timedNumber = 0
            }
            print("sumNumber", sumNumber)
        }
        return String(sumNumber)
    }
}

let solution = Solution()
//print(solution.multiply("92", "83"))
//print(solution.multiply("123", "456"))
//print(solution.multiply("17039", "7218"))
print(solution.multiply(["4", "9", "8", "8", "2", "8", "6", "6", "0", "1", "9", "6"], ["8", "4", "0", "4", "7", "7", "6", "2", "9", "5", "3", "3"]))
