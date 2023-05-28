// Objects are Like we use to do in Java as well.

const student_114 = {
  name: 'Hassan',
  age: 22,
  career: 'Full stack Web development'
}

// Print Hassan.
console.log(student_114.name);

// reAssign and name is Hassan Mahmood.
student_114.name = 'Hassan Mahmood';

// Other way of assigning
student_114['name'] = 'Hassan Awan';

// Adding the new parameter.
student_114.education = 'BCS';
student_114['City'] = 'Lahore';


console.log(student_114);