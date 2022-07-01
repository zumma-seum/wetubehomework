export const home = (req, res) => res.send("home");
export const trending = (req, res) => res.send("trending");
export const newStory = (req, res) => res.send("new Story");
export const story = (req, res) => res.send(`read story ${req.params.id}`);
export const edit = (req, res) => res.send(`edit Story ${req.params.id}`);
export const deleteStory = (req, res) => res.send(`delete Story ${req.params.id}`);