/* filename: complex_code.js */

// This code demonstrates a complex implementation of a social media dashboard.
// It includes multiple classes, inheritance, and asynchronous API calls.

// Class representing a social media platform
class SocialMediaPlatform {
  constructor(name) {
    this.name = name;
    this.posts = [];
  }

  addPost(post) {
    this.posts.push(post);
  }
}

// Class representing a social media post
class Post {
  constructor(content, author) {
    this.content = content;
    this.author = author;
    this.likes = 0;
    this.comments = [];
  }

  addLike() {
    this.likes++;
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

// Class representing a comment
class Comment {
  constructor(content, author) {
    this.content = content;
    this.author = author;
  }
}

// Class representing a social media user
class User {
  constructor(name, platform) {
    this.name = name;
    this.platform = platform;
    this.posts = [];
    this.friends = [];
  }

  createPost(content) {
    const post = new Post(content, this);
    this.platform.addPost(post);
    this.posts.push(post);
  }

  addFriend(user) {
    this.friends.push(user);
  }
}

// Function to simulate asynchronous API call to get users from a social media platform
async function getUsersFromPlatform() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = [
        { name: "John", platform: "Facebook" },
        { name: "Sarah", platform: "Twitter" },
        { name: "David", platform: "Instagram" }
      ];
      resolve(users);
    }, 2000);
  });
}

// Perform API call and create social media dashboard
async function createDashboard() {
  const users = await getUsersFromPlatform();

  const dashboard = {};

  users.forEach((user) => {
    const platform = new SocialMediaPlatform(user.platform);
    const socialMediaUser = new User(user.name, platform);

    dashboard[user.name] = socialMediaUser;
  });

  return dashboard;
}

// Example usage of the complex code
async function main() {
  const dashboard = await createDashboard();

  const john = dashboard["John"];
  john.createPost("Hello, everyone!");
  john.createPost("Here's a photo from my recent trip.");

  const sarah = dashboard["Sarah"];
  sarah.createPost("Just finished reading an amazing book.");
  sarah.createPost("Excited for my upcoming vacation!");

  const david = dashboard["David"];
  david.createPost("Working on a new art project.");

  console.log(dashboard);
}

main();