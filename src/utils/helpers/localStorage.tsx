export function getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return JSON.parse(user);
}
export function setCurrentUser(user) {
    localStorage.setItem("currentUser",JSON.stringify(user));
}