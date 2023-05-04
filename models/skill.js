const skills = [
    {id: 1, skill: 'JavaScript', info: "I'm proficient in JavaScript."},
    {id: 2, skill: 'CSS', info: "I'm proficient in CSS."},
    {id: 3, skill: 'HTML', info: "I'm proficient in HTML."},
    {id: 4, skill: 'Express', info: "I'm proficient in Express."}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteSkill,
    update
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};

function create(skill) {
    let skillId = 0;
    skills.forEach(skill => {
        skillId = skill.id
    });
    skill.id = skillId + 1;
    skill.info = `I'm proficient in ${skill.skill}.`
    skills.push(skill);
}

function deleteSkill(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
}