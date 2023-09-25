export function taskFirst() {
  const task = 'I prefer const when I can.'; // Use const for variables that won't be reassigned.
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let'; // Use let when you intend to reassign the variable.
  combination += getLast();

  return combination;
}

