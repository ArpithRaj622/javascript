const person = {
    name : "Arpith",
    showName() {
        const fn = () => {
            console.log(this.name);
        }

        fn();
    }
}

person.showName();

