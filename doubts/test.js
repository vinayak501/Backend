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