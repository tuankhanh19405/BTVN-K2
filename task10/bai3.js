function sortUsersByName(users) {
  return users
    .map(u => {
      const parts = u.fullName.trim().split(" ");
      return {
        ...u,
        ten: parts[parts.length - 1],        
        hoTenDem: parts.slice(0, -1).join(" ") 
      };
    })
    .sort((a, b) => {
      const nameCompare = a.ten.localeCompare(b.ten, "vi", { sensitivity: "base" });
      if (nameCompare !== 0) return nameCompare;

      return a.hoTenDem.localeCompare(b.hoTenDem, "vi", { sensitivity: "base" });
    });
}

// Test
const users = [
  { fullName: "Nguyễn Minh Hoàng" },
  { fullName: "Nguyễn Đức Hoàng" },
  { fullName: "Lê Văn" },
  { fullName: "Lê Văn Tình" },
  { fullName: "Lê Nin" },
];

console.log(sortUsersByName(users));
