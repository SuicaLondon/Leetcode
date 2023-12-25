class ParkingSystem {
    park: number[]
    constructor(big: number, medium: number, small: number) {
        this.park = [big, medium, small]
    }

    addCar(carType: number): boolean {
        if (this.park[carType - 1] != 0) {
            this.park[carType - 1]--
            return true
        }
        return false
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
