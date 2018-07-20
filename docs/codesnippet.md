```js
exports.inviteUser = function(req, res) {
  var invitationBody = req.body;
  var shopId = req.params.shopId;
  var authUrl = "https://url.to.auth.system.com/invitation";

  superagent
  .post(authUrl)
  .send(invitationBody)
  .end(function(err, invitationResponse) {
    if (invitationResponse.status === 201) {
      User.findOneAndUpdate({
      authId: invitationResponse.body.authId
    }, {
      authId: invitationResponse.body.authId,
      email: invitationBody.email
    }, {
      upsert: true,
      new: true
    }, function(err, createdUser) {
      Shop.findById(shopId).exec(function(err, shop) {
        if (err || !shop) {
          return res.status(500).send(err || { message: 'No shop found' });
        }
        if (shop.invitations.indexOf(invitationResponse.body.invitationId)) {
          shop.invitations.push(invitationResponse.body.invitationId);
        }
        if (shop.users.indexOf(createdUser._id) === -1) {
          shop.users.push(createdUser);
        }
        shop.save();
      });
    });
  } else if (invitationResponse.status === 200) {
    res.status(400).json({
      error: true,
      message: 'User already invited to this shop'
    });
    return;
  }
  res.json(invitationResponse);
  });
};
```

# Code Analysis Challenge

### 1. What do you think is wrong with the code, if anything?

* The first obvious point is that the code is written procedurally and not as an object.
* It's not clear from this single file what superagent is, even though it seems central to what it is (from Googling I found out it's an AJAX replacement).
* It's a shame it isn't using ES6 syntax.
* The main workflow appears to be built around the invitationResponse status? But invitationResponse.status is handled across a few different difficult to follow if statements.

### Can you see any potential problems that could lead to unexpected behaviour?

* Is it right that there are only requirements for 200 and 201 on the invitationResponse?
* The main function (end) doesn't have an error handling - err is defined in the function but never used.

### How might you refactor this code?

**Make it easier to read**
* Turn it into a class object with separate concerns
* Different scenarios for each invitationResponse status

**Increase code reuse**
* Methods/functions based on invitationResponse
* Separate out the whole createdUser function

**Improve the testability**
* Individual/separate/short functions with injected dependencies will make testing a lot easier
* Providing superagent as a dependency inject would mean it could be mocked easily

**Minimize unhandled exceptions**
* Lead with the error handling. They seem to be last?
