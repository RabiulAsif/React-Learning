export const Practices = () => {
  const students = [];
    return (
        <>
        {/* {<p>{students.length && "No Students Found!"}</p>} */}
        {/* {1st}  */}

        {/* {students.length===0 && "No Students Found!"} */}

        {/* {2nd} */}
        {/* {!students.length===0 && "No Students Found!"} */}

        {/* {3rd} */}
        {!Boolean(students.length) && "No Students Found!"}


        {<p>Number of students: {students.length}</p>}
        </>
    );
};
