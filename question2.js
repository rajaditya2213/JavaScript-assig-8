//Q2. Create a student enrollment system using JavaScript classes. Implement two classes, Student and
//Admission, to manage student enrollments, course admission, and enrollment tracking. The Student class
//should have methods for enrolling in courses and displaying enrolled courses, while the Admission class
//should handle student enrollments, course admission, and the display of enrolled students. Your task is to
//implement these classes with clear and organized code, adhering to the specified reBuirements provided.


class Student{

     constructor(name,email){
          this.name=name;
          this.email=email;
          this.course=[];

     }

     enroll(course){
          this.course.push(course);
          console.log(`${this.name} has enrooled ${course}`);
     }

     showCourse(){
          console.log(`${this.name}'s enrooled course: ${this.course.join(', ')}`);
     }
}


class Admission{
     constructor() {
          this.students=[];
     }

     enrolledStudent(student){
          this.students.push(student);
          console.log(`${student.name} has been enrooled`);
     }

     assignCourse(student,course){
          if(student instanceof Student && student.email && course){
               student.enroll(course);
          } 

         else{
            console.log(`Invalid Student or Course Information`);
         }
     }

     showEnrolledStudent(){
          console.log('Enrolled Student');
          this.students.forEach((student)=>{
              console.log(`- ${student.name} : ${student.email}`);
          });
     }
}

const admissionOffice=new Admission();

const student1=new Student('Aditya raj', 'aditya@gmail.com');
const student2=new Student('John', 'john@gmail.com');
const student3=new Student('Virat','virat@gmail.com');

admissionOffice.enrolledStudent(student1);    //Aditya raj has been enrooled
admissionOffice.enrolledStudent(student2);   //John has been enrooled
admissionOffice.enrolledStudent(student3);   //Virat has been enrooled

admissionOffice.assignCourse(student1, 'Full Stack Development 2.0 Batch');  //Aditya raj's has enrooled Full Stack Development 2.0 Batch
admissionOffice.assignCourse(student2, 'java Stack Developer Batch');    //John's has enrooled  Java Stack Developer Batch
admissionOffice.assignCourse(student3, "Data Science Batch");     //Virat's has enrooled Data Science Batch

student1.showCourse();    //Aditya raj's enrooled course: Full Stack Development 2.0 batch
student2.showCourse();  //John's enrooled course : java Stack Developer Batch
student3.showCourse();  //Virat's enrooled course : Data Science Batch 


admissionOffice.showEnrolledStudent();
// - Aditya raj : aditya@gmail.com
// - John : john@gmail.com
//- Virat : virta@gmail.com



