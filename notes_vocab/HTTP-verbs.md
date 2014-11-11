### GET
 1. GET /users/:username/orgs - list of all public memberships in organizations for any user
 2. GET /user/orgs - lists both hidden and public memberships
 3. GET /repos/:owner/:repo/pulls - lists pull requests

### POST
 1. POST /repos/:owner/:repo/pulls - create a pull request
 2. POST /repos/:owner/:repo/issues - Create an issue
 3. POST /user/repos - Create a new repository

### PUT
 1. PUT /users/:username/site_admin - Promote an ordinary user to a site administrator
 2. PUT /repos/:owner/:repo/notifications - Marking all notifications in a repository as “read” removes them from the default view on GitHub.com.
 3. PUT /notifications/threads/:id/subscription - This lets you subscribe to a thread, or ignore it.

### DELETE
 1. DELETE /notifications/threads/:id/subscription - Delete a thread subscription
 2. DELETE /repos/:owner/:repo/git/refs/:ref - Delete a reference
 3. DELETE /repos/octocat/Hello-World/git/refs/heads/feature-a - Delete a branch
