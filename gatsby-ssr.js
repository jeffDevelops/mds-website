const React = require("react")

exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    ...(process.env.NODE_ENV === "production"
      ? [
          <script
            dangerouslySetInnerHTML={{
              __html: `
          (function(w,d,t,u,n,a,m){w['MauticTrackingObject']=n;
              w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},a=d.createElement(t),
              m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://mds.headcount.guru/mtc.js','mt');
  
          mt('send', 'pageview');`,
            }}
          />,
        ]
      : []),
    <script
      dangerouslySetInnerHTML={{
        __html: `
    /** This section is only needed once per page if manually copying **/
    if (typeof MauticSDKLoaded == 'undefined') {
        var MauticSDKLoaded = true;
        var head            = document.getElementsByTagName('head')[0];
        var script          = document.createElement('script');
        script.type         = 'text/javascript';
        script.src          = 'https://mds.headcount.guru/index.php/media/js/mautic-form.js?vd7f810c2';
        script.onload       = function() {
            MauticSDK.onLoad();
        };
        head.appendChild(script);
        var MauticDomain = 'https://mds.headcount.guru/index.php';
        var MauticLang   = {
            'submittingMessage': "Please wait..."
        }
    }else if (typeof MauticSDK != 'undefined') {
        MauticSDK.onLoad();
    }`,
      }}
    />,
  ])
}
