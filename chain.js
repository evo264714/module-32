const users = [{id: 1, name: 'Abul', job: 'doctor'}]
// console.log(users[0].name);

const data = {
    count: 500,
    data: [
        {id: 1, name: 'Babul', job: 'leader'},
        {id: 2, name: 'Dabul', job: 'leader'},
    ]
}
const firstJob = data.data[0].job;

const user = {
    id: 5001,
    name: 'Thomas Alba Edison',
    address: {
        street: {
            first: '35/A Kochukhet,Dhaka',
            second: 'Third Floor',
            third: 'Right Side'
        },
        postOffice: 'Cantonment',
        city: 'Dhaka'
    }
}
const userFloor = user.address.stret?.second;
console.log(userFloor);