export const home = (req, res) => res.render("home", {pageTitle: "HOME"});
export const trending = (req, res) => res.render("trending", {pageTitle: "TRENDING"});
export const newStories = (req, res) => res.render("newStories", {pageTitle: "NEW STORIES"});
export const seeStory = (req, res) =>
  res.render("seeStory", {pageTitle: "SEE STORY"});
export const editStory = (req, res) =>
  res.render("editStory", {pageTitle: "EDIT STORY"});
export const deleteStory = (req, res) =>
  res.render("deleteStory", {pageTitle: "DELETE STORY"});
