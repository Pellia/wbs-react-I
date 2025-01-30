import "./../styles.css";

const Title = ({ titleName }) => {
    return (
        <>
            <h1 className="title">{titleName}</h1>
            <hr className="titleHR" />
        </>
    );
};

export default Title;
