export const join = (req, res) => res.render("join", {pageTitle:"JOIN"});
export const login = (req, res) => res.render("login", {pageTitle:"LOGIN"});
export const seeUsers = (req, res) => res.render("seeUsers", {pageTitle:"SEE USERS"});
export const seeUser = (req, res) =>  res.render("seeUser", {pageTitle:"SEE USER"});
export const editProfile = (req, res) => res.render("editProfile", {pageTitle:"EDIT PROFILE"});
