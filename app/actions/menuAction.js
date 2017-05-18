//action

export const addClass = 'addClass';
export const removeClass = 'removeClass';
//export const changeClass = 'removeClass';

export function addTodo(height) {
  return { type: addClass,height }  
}
export function removeTodo(height) {
  return { type: removeClass,height }  
}