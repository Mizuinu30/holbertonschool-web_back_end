export default function getListStudents(array){
    // return array.map((item) => item.id);
  if (!Array.isArray(array)) {
    return [];
  }
  return array.map((item) => item.id);
}
