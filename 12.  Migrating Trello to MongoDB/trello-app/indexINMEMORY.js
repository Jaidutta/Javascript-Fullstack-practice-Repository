// username, password | USERS table
// organization | ORGANIZATIONS table
// boards | BOARDS TABLE
// issues | ISSUES TABLE




const USERS = [
  /*
  { id: 1,
    username: "jaiduttauk", // uniqueness constraint
    password: "123123"
  }, {
    id: 2,
    username: "paramitarahauk88",
    password: "123123"
  }
  */
];

const ORGANIZATIONS = [
  /*
  {
    id: 1,
    title: "100xdevs",
    description: "Learning coding platform",
    admin: 1, // userId
    members: [2]  // userId
  },
  {
    id: 2,
    title: "ramandev org",
    description: "Experimenting with code",
    admin: 2,   // userId
    members: []  // userId
  }
  */
];

const BOARDS = [
  /*

  {
    id: 1,
    title: "100xschool website(frontend)",
    organizationId: 1
  }
  */
];
const ISSUES = [
  /*
  {
    id: 1,
    title: "Add dark mode",
    boardId: 1,
    state: "IN_PROGRESS"
  },
  {
    id: 2,
    title: "Allow admins to create more courses",
    boardId: 1,
    state: "DONE",  // other states are NEXT_UP | IN_PROGRESS | DONE | ARCHIVED

  }
  */
];

const { authMiddleware } = require("./middleware")

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());
let USERS_ID = 1;
let ORGANIZATION_ID = 1;
let BOARD_ID = 1;
let ISSUES_ID = 1;

app.post("/signup", function (req, res) {
  const username = req.body.username
  const password = req.body.password

  const userExists = USERS.find(user => user.username == username)

  if (userExists) {
    res.status(403).json({
      message: "User with this username already exists"
    })
    return;
  }

  USERS.push({
    username,
    password,
    id: USERS_ID++
  })
  res.json({
    message: "You have signed up successfully"
  })
})

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const userExists = USERS.find(user => (user.username == username) && (user.password == password));

  if (!userExists) {
    res.status(401).json({
      message: "Invalid credentials"
    });
    return;
  }

  const token = jwt.sign({
    userId: userExists.id
  }, "projectmanagementsupersecretpassword123123")

  res.json({
    token
  })
})


// authenticated route
app.post("/organization", authMiddleware, function (req, res) {
  const userId = req.userId;
  ORGANIZATIONS.push({
    id: ORGANIZATION_ID++,
    title: req.body.title,
    description: req.body.description,
    admin: userId,
    members: []
  })
  res.json({
    message: "Organisation created",
    id: ORGANIZATION_ID - 1
  })
})

app.post("/add-member-to-organization", authMiddleware, function (req, res) {
  const userId = req.userId;
  const organizationId = req.body.organizationId; // get orgId from req
  const memberUserUsername = req.body.memberUserUsername;  // userEmail from req

  const organization = ORGANIZATIONS.find(org => org.id === organizationId); // find the org using the sent orgId

  if (!organization || organization.admin !== userId) {
    // if org does not exist or the user is not admin
    res.status(411).json({
      message: "Either this org doesnt exist or you are not an admin of this org to add a member"
    })
    return
  }

  const memberUser = USERS.find(u => u.username === memberUserUsername); // find the user using the userEmail

  // if no user found to add as a member 
  if (!memberUser) {
    res.status(411).json({
      message: "No user with this username exists in our db"
    })
    return
  }

  organization.members.push(memberUser.id); // add user/member to org

  res.json({
    message: "New member added!"
  })

})

app.post("/board", function (req, res) {

})



app.post("/issue", function (req, res) {

})

// ALL THE READ ENDPOINTS BELOW

app.get("/organization", authMiddleware, function (req, res) {
  const userId = req.userId;
  const organizationId = parseInt(req.query.organizationId);
  const organization = ORGANIZATIONS.find(org => org.id === organizationId);

  if (!organization || organization.admin !== userId) {
    // if org does not exist or the user is not admin
    res.status(411).json({
      message: "Either this org doesnt exist or you are not an admin of this org to add a member"
    })
    return
  }
  res.json({
    ...organization,
    members: organization.members.map(memberId => {
      const user = USERS.find(user => user.id == memberId);
      return {
        id: user.id,
        username: user.username
      }
    })
  })
})

// backend.trello.com/boards?organizationId=2
app.get("/boards", function (req, res) {

})

app.get("/issues", function (req, res) {

})

app.get("/members", function (req, res) {

})

//  update an issue(move them from one colum to another)
app.put("/issues/:issueId", function (req, res) {

})

//  delete a member
app.delete("/members", authMiddleware, function (req, res) {
  const userId = req.userId;
  const organizationId = req.body.organizationId; // get orgId from req
  const memberUserUsername = req.body.memberUserUsername;  // userEmail from req

  const organization = ORGANIZATIONS.find(org => org.id === organizationId); // find the org using the sent orgId

  if (!organization || organization.admin !== userId) {
    // if org does not exist or the user is not admin
    res.status(411).json({
      message: "Either this org doesnt exist or you are not an admin of this org to add a member"
    })
    return
  }

  const memberUser = USERS.find(u => u.username === memberUserUsername); // find the user using the userEmail

  // if no user found to add as a member 
  if (!memberUser) {
    res.status(411).json({
      message: "No user with this username exists in our db"
    })
    return
  }

  organization.members = organization.members.filter(memberId => memberId !== memberUser.id); // remove the user/member from the org

  console.log(organization);
  console.log(organization.members)
  res.json({
    message: "Member has been removed!"
  })
})


app.listen(3000);