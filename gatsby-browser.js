exports.onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== "production" || typeof mt !== "function") {
    return null
  }

  // wrap inside a timeout to make sure react-helmet is done with it's changes (https://github.com/gatsbyjs/gatsby/issues/9139)
  // reactHelmet is using requestAnimationFrame: https://github.com/nfl/react-helmet/blob/5.2.0/src/HelmetUtils.js#L296-L299
  const sendPageView = () => {
    window.mt("send", "pageview")
  }

  setTimeout(sendPageView, 0)

  return null
}
