<StaticQuery
query={graphql`
      query WorkQuery {
        allMarkdownRemark {
edges {
node {
fields {
  slug
}
  id
fileAbsolutePath
frontmatter {
  title
  type
  toolsUsed
  imgPath {
    publicURL
  }
  excerpt
}
excerpt
html

}
}
}
}`}
render={data => (
  <div className={classes.root}>
    <Typography className={classes.title} variant="h1">Work</Typography>
    <div className={classes.content}>
      <CardSpring openDelay open={open}>
        <div className={classes.cards}>
          <Trail
            delay={!open ? 800 : 700}
            items={data.allMarkdownRemark.edges}
            reverse={!open}
            keys={edge => edge.node.id}
            from={{ transform: 'translate3d(0, 4000px,0)' }}
            to={open ? { transform: 'translate3d(0, 0,0)' } : { transform: 'translate3d(0,4000px,0)' }}
          >
            {item => props => <ProjectCard trail={props} project={item.node} />}
          </Trail>
        </div>
      </CardSpring>
    </div>
  </div>
)}
/>