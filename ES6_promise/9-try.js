function guardrail(mathFunction) {
  const queue = []; // initialize an empty array

  try {
    // try to Execute the mathFunction and push the result to the queue
    const result = mathFunction();
  } catch (error) {
    // if an error is caught, push the error to the queue
    queue.push(`Error: ${error.message}`);
  } finally {
    // push the length of the queue to the queue
    queue.push('Guardrail was processed');
  }
  return queue;
}
