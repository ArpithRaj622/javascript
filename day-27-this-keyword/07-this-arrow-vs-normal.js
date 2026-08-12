const person = {
    name : "Arpith",
    showName() {
        const fn = () => {
            console.log(this.name);
        };
        function normal() {
            console.log(this.name);
        }
        fn();
        normal();
    }
}

person.showName();