exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  await createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
