export const getAuthStatus = () => {
  if(process.env.NODE_ENV === "development") return true;
  return !!localStorage.getItem("token");
};
