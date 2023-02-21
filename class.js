//* syntactic sugar
class Instructor{
    name;
    designation = 'Web Course Instructor'
    team = 'Web Team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`Start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`)
    }
}
const aamir = new Instructor('aamir', 'mumbai');
console.log(aamir);
aamir.startSupportSession('9.00');
aamir.createQuiz(60);

const solaiman = new Instructor('Solaiman Khan', 'Dhaka')
console.log(solaiman);