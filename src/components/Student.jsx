import "./../styles.css";
import Grade from "./Grade";

const Student = ({ studentData }) => {
    return (
        <section className="student-container">
            <div className="student-card">
                <img className="student-avatar" src={studentData.picture} alt="" />
                <div>
                    <h2>{studentData.firstName + " " + studentData.lastName}</h2>
                    <p>
                        <span>Course: </span>
                        {studentData.course}
                    </p>
                    <p>
                        <span>Age: </span>
                        {studentData.age}
                    </p>
                    <p>
                        <span>Location: </span>
                        {studentData.city}
                    </p>
                </div>
            </div>
            <hr />
            <div>
                <p>
                    <span>Status: </span>
                    {studentData.graduate ? "Enrolled" : "Not Enrolled"}
                </p>
                <Grade grade={studentData.gpa} />
            </div>
        </section>
    );
};

export default Student;
