import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 4000;

// In-memory data store
let posts = [/* Your existing post data here */];
let lastId = 3;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Challenge 1: GET All posts
app.get("/posts", async (req, res) => {
  try {
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Challenge 2: GET a specific post by id
app.get("/posts/:id", async (req, res) => {
  const postId = parseInt(req.params.id);

  try {
    const post = posts.find((p) => p.id === postId);
    if (!post) {
      res.status(404).json({ error: "Post not found" });
      return;
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Challenge 3: POST a new post
app.post("/posts", async (req, res) => {
  try {
    const newPost = req.body;
    lastId++;
    newPost.id = lastId;
    posts.push(newPost);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Challenge 4: PATCH a post when you just want to update one parameter
app.patch("/posts/:id", async (req, res) => {
  const postId = parseInt(req.params.id);

  try {
    const postIndex = posts.findIndex((p) => p.id === postId);
    if (postIndex === -1) {
      res.status(404).json({ error: "Post not found" });
      return;
    }
    const updatedPost = { ...posts[postIndex], ...req.body };
    posts[postIndex] = updatedPost;
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Challenge 5: DELETE a specific post by providing the post id
app.delete("/posts/:id", async (req, res) => {
  const postId = parseInt(req.params.id);

  try {
    const postIndex = posts.findIndex((p) => p.id === postId);
    if (postIndex === -1) {
      res.status(404).json({ error: "Post not found" });
      return;
    }
    const deletedPost = posts.splice(postIndex, 1);
    res.json(deletedPost[0]);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default app;


