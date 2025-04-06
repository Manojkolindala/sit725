const express = require("express");
const app = express();
const port = process.env.PORT || 3004;
const mongoose = require("mongoose");


app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


mongoose.connect("mongodb://localhost:27017/myprojectDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log(" Connected to MongoDB");
});


const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});
const Project = mongoose.model("Project", ProjectSchema);


const sampleProject = new Project({
  title: "Kitten 4",
  image: "public/kitchen.jpg", 
  link: "About Kitten 4",
  description: "Demo description about kitten 4",
});


    sampleProject.save()
  .then(() => console.log("Sample project saved!"))
  .catch(err => console.log("Error saving sample project:", err));


app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: "Success" });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: "Error fetching projects" });
  }
});


app.listen(port, () => {
  console.log(` App listening on http://localhost:${port}`);
});
