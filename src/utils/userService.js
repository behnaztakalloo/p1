// گرفتن کاربران از LocalStorage
export function getUsers() {
  const data = localStorage.getItem("users");
  return data ? JSON.parse(data) : [];
}

// اضافه کردن کاربر
export function addUser(user) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

// چک یونیک بودن کد ملی
export function isNationalIdUnique(nationalId) {
  const users = getUsers();
  return !users.some(u => u.nationalId === nationalId);
}

// گرفتن کاربر برای لاگین
export function login(email, password) {
  const users = getUsers();
  return users.find(u => u.email === email && u.password === password);
}
