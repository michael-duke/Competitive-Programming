function gradingStudents(grades) {
  // Write your code here
  let new_grades=[];
  let old_grade=0;
  let new_grade=0;
  let round_fact=0;
  let n =grades.length;
  
  if(n>=1 && n<=60){
      for (let i=0; i<grades.length;i++){
          if (grades[i]>=38 && grades[i]<=100){
          
          old_grade=grades[i];
          new_grade= Math.ceil(grades[i]/5)*5;
          
          //Round factor 3
          round_fact= new_grade-old_grade;
          
          if(round_fact<3) new_grades.push(new_grade);
          
          else new_grades.push(grades[i]);
      }
      
      if(grades[i]>=0 && grades[i]<38) new_grades.push(grades[i]);
     }
 }

  return new_grades;
      
}