export default function guardrail(mathFunction) {
  const queue = []; // initialize an empty array

  try {
    // try to execute the mathFunction and push the result to the queue
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    // if an error is caught, push the error message to the queue
    queue.push(`Error: ${error.message}`);
  } finally {
    // push the message 'Guardrail was processed' to the queue
    queue.push('Guardrail was processed');
  }

  return queue;
}
