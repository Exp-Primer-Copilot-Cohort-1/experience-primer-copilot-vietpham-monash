function skillsMember() {
    var skills = document.getElementById("skills").value;
    var skillsError = document.getElementById("skillsError");
    if (skills.length == 0) {
        skillsError.innerHTML = "Please enter your skills";
        return false;
    }
    skillsError.innerHTML = "";
    return true;
}