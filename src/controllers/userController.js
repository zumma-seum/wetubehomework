export const join = (req, res) => res.send("join");
export const login = (req, res) => res.send("login"); 
export const edit = (req, res) => res.send("edit user"); 
export const user = (req, res) => res.send(`user: ${req.params.id}`); 
