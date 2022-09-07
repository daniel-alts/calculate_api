const app = require("./app");

const PORT = 3000;

app.server.listen(PORT, () => {
	console.log(`Server is listening on port: ${PORT}`);
});
