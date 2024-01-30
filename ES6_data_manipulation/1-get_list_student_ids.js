// Objective: Write a function that returns an array of ids from a list of objects.

export default function getListStudents(array){
  if (!Array.isArray(array)) {
    return [];
  }
  return array.map((item) => item.id);
}
