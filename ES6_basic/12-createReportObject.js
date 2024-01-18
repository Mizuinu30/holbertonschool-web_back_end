export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList }, // Spread syntax to ensure a copy, if needed
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
