"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[2109],{25354:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return s},default:function(){return d}});var l=t(63366),r=(t(67294),t(64983)),c=t(55602),u=t(98057),i=["components"],s={},o={_frontmatter:s},a=c.Z;function d(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.kt)(a,Object.assign({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Third party player controls should implement the fullscreen functionality on the client side with the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode"},"HTML5 Fullscreen API"),"."),(0,r.kt)("h3",null,"Necessary steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"switch your embed container to fullscreen mode with HTML5 FullScreen API"),(0,r.kt)("li",{parentName:"ul"},"handle the iframe size accordingly"),(0,r.kt)("li",{parentName:"ul"},"IBM Video Streaming embed will adopt to the resized iframe size responsively")),(0,r.kt)("h3",null,"Example"),(0,r.kt)(u.Z,{src:"https://video.ibm.com/embed/1524?hideFullscreen",controls:["fullscreen"],mdxType:"EmbedPlayer"}),(0,r.kt)("h3",null,"Javascript"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var fullScreenBtn = document.getElementById('fullScreenBtn');\nvar container = document.getElementById('Container');\n\ndocument.addEventListener(\"fullscreenchange\",changeHandler);\ndocument.addEventListener(\"webkitfullscreenchange\",changeHandler);\ndocument.addEventListener(\"mozfullscreenchange\",changeHandler);\ndocument.addEventListener(\"MSFullscreenChange\", changeHandler, false);\n\n// trigger fullscreen change on our custom button click\nfullScreenBtn.addEventListener('click',onFullScreenBtnClick);\n\n// check if the current state is fullscreen or not\nfunction isFullScreen() {\n  return document.fullScreen ||\n    document.webkitIsFullScreen ||\n    document.mozfullScreen ||\n    document.msFullscreenElement;\n}\n\n// change everything on other change events too\nfunction changeHandler () {\n  container.className = isFullScreen() ? 'fullscreen' : '';\n}\n\n// fullscreen button event handler\nfunction onFullScreenBtnClick () {\n  // if we are in fullscreen, then exit\n  if (isFullScreen()) {\n    if (document.exitFullscreen) {\n      document.exitFullscreen();\n    } else if (document.webkitExitFullscreen) {\n      document.webkitExitFullscreen();\n    } else if (document.mozExitFullScreen) {\n      document.mozExitFullScreen();\n    } else if (document.msExitFullscreen) {\n      document.msExitFullscreen();\n    }\n    // if we are in non-fullscreen mode, open it\n  } else {\n    if (container.requestFullscreen) {\n      container.requestFullscreen();\n    } else if (container.webkitRequestFullscreen) {\n      container.webkitRequestFullscreen();\n    } else if (container.mozRequestFullScreen) {\n      container.mozRequestFullScreen();\n    } else if (container.msRequestFullscreen) {\n      container.msRequestFullscreen();\n    }\n  }\n}\n")),(0,r.kt)("h3",null,"HTML"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div id="Container">\n  <iframe\n    id="UstreamIframe"\n    width="100%" height="100%"\n    src="https://www.ustream.tv/embed/1524?hideFullscreen"\n    frameborder="0"\n    allowfullscreen\n    referrerpolicy="no-referrer-when-downgrade"\n  >\n  </iframe>\n  <div id="fullScreenBtn"> custom fullscreen button </div>\n</div>\n')),(0,r.kt)("h3",null,"CSS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"#Container {\n  position: relative;\n  width: 640px;\n  height: 390px;\n}\n\n#Container.fullscreen {\n  width: 100%;\n  height: 100%;\n}\n\n#fullScreenBtn {\n  cursor: pointer;\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  padding: 5px;\n  background: #38f;\n  color: #fff;\n}\n")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-player-api-examples-fullscreen-functionality-mdx-28b3d44bbc577c6a4af4.js.map