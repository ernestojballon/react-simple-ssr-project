const template = (body, gists) =>(`
<!DOCTYPE html>
<html>
  <head>
    <title>React App</title>
  </head>
  <body>
    <div id="root">${body}</div>
    <script>window.gists = ${JSON.stringify(gists)}</script>
    <script src="/static/bundle.js"></script>
  </body>
</html>
`)

export default template