const skills = [
    {id: 1, skill: 'JavaScript', info: "I'm proficient in JavaScript"},
    {id: 2, skill: 'CSS', info: "I'm proficient in CSS"},
    {id: 3, skill: 'HTML', info: "I'm proficient in HTML"},
    {id: 4, skill: 'Express', info: "I'm proficient in Express"}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};
