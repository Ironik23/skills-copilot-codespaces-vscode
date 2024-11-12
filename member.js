function skillsMember(name, skills) {
    return {
        name: name,
        skills: skills,
        addSkill: function(skill) {
            this.skills.push(skill);
        },
        listSkills: function() {
            return this.skills.join(', ');
        }
    };
}