
            console.log(`U22275330`)
            class Car{
                    constructor(make, speed){
                        this.make = make;
                        this.speed = speed;
                        console.log(`Make: ${make}`)
                        console.log(`Speed: ${speed}`)
                    }//Create Car class with constructor for make and speed.
                    
                    calculateacceleration(){
                        this.speed += 10;
                        console.log(this.speed)}//Add accelerate method to increase speed by 10 km/h.
                
                    calculatebrake(){
                        this.speed -=5
                        console.log(this.speed)}//Add brake method to decrease speed by 5 km/h.

                    }
            let BMW= new Car("BMW",120)
                    BMW.calculateacceleration()
                    BMW.calculatebrake()

            let MER= new Car("Mercedes",95)
                    MER.calculateacceleration()
                    MER.calculatebrake()
             //Test accelerate and brake methods on Car instances.
