const user = {
    name : "vinayak",
    greet : function(){
        console.log(`hello ${this.name}`);
    }
}

user.greet();

const user1 = {
    name : "raj",
    greet : function(){
        const arrowFunciton = () => {
            console.log(`hello raj ${this.name}`);
        }
        arrowFunciton();
    }
}

user1.greet()


const newError = new Error("new user Created Error");
newError.code = "USER_ERROR";
newError.status = 400;

const devideByZero = (num1,num2) => {
    return a;
}

try {
    const ans = devideByZero(5,0);
    console.log(ans);
} catch (error) {
    console.log("Full Error Object:", error);

    // You can log specific properties too
    console.log("Error Message:", error.message);
    console.log("Error Name:", error.name);
    console.log("Error Stack:", error.stack);
    newError.originalMessage = error.message;
    throw newError;
}