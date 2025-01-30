import "./../styles.css";

const Grade = ({ grade }) => {
    let gpa;
    if (grade >= 97) {
        gpa = "A+";
    } else if (grade >= 93) {
        gpa = "A";
    } else if (grade >= 90) {
        gpa = "A-";
    } else if (grade >= 87) {
        gpa = "B+";
    } else if (grade >= 83) {
        gpa = "B";
    } else if (grade >= 80) {
        gpa = "B-";
    } else if (grade >= 77) {
        gpa = "C+";
    } else if (grade >= 73) {
        gpa = "C";
    } else if (grade >= 70) {
        gpa = "C-";
    } else if (grade >= 67) {
        gpa = "D+";
    } else if (grade >= 63) {
        gpa = "D";
    } else if (grade >= 60) {
        gpa = "D-";
    } else {
        gpa = "F";
    }

    return (
        <p>
            <span>GPA: </span>
            {gpa}
        </p>
    );
};
export default Grade;
