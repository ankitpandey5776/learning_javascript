//* destructuring javascript=The destructuring syntax is a JavaScript syntax that makes it possible
// * to unpack values from arrays, or properties from objects, into distinct variables

const course = {
    coursename:"javascript",
    courseid:"121",
    courseInstructor:"Ankit"
}

// to access courseInstructor everythime we use
course.courseInstructor;
console.log(course.courseInstructor);
//* alt approach
 const {courseInstructor} = course;
 console.log(courseInstructor)

 const {courseInstructor:x} = course;  //! x is the name that we have assignedd to courseInstructor;
 console.log(x);


 //+++++++++++++++++++++++++++++++++api and json++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 //*  when we want our work to be done by someone else api is called/used.its generalls in json format
 
//  {
//     "name"  : "ankit",
//     "course"  : " javascript",
//     "address"  : "Ranchi"
//  }