class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`);
    }
}
class Instructor extends TeamMember{
    
    designation = 'Web Course Instructor'
    team = 'Web Team'
    
    constructor(name, location){
       super(name, location);
    }
    startSupportSession(time){
        console.log(`Start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`)
    }
}

class Developer extends TeamMember{
    
    designation = 'Web Course Instructor'
    team = 'Web Team'

    tech;
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature){
        console.log(`Please develop the ${feature}`);
    }
    createQuiz(version){
        console.log(`Please release the version ${version}`)
    }
}


class JobPlacement extends TeamMember{
    designation = 'Job Placement Commandos'
    team = 'Job Placement'
    region;
    constructor(name, location, region){
        super(name, location);
        this.region = region;
    }
    provideResume(feature){
        console.log(`Please develop the ${feature}`);
    }
    prepareStudent(version){
        console.log(`Please release the version ${version}`)
    }
}

const evo = new Developer('Evo', 'Dhaka', 'React');
// console.log(evo);
evo.provideFeedback();
const anotherEvo = new JobPlacement('Another Evo', 'Kolkata', 'India');
console.log(anotherEvo);