(function(root){
'use strict';
const U=root.AtlasDomain;
let previous,detached=[],timer;
function sync(){
 const banned=U.blackout();
 if(banned)for(const section of document.querySelectorAll('[data-poll-content]')){const anchor=document.createComment('poll content paused');section.replaceWith(anchor);detached.push({section,anchor});}
 if(!banned&&detached.length){for(const {section,anchor} of detached)if(anchor.isConnected)anchor.replaceWith(section);detached=[];}
 if(previous!==undefined&&previous!==banned)root.dispatchEvent(new Event('atlas:blackout-change'));
 previous=banned;
 clearTimeout(timer);
 const now=Date.now(),next=now<U.blackoutStart?U.blackoutStart:now<=U.blackoutEnd?U.blackoutEnd+1:null;
 if(next!==null)timer=setTimeout(sync,Math.min(Math.max(1,next-now),2147483647));
 return banned;
}
root.AtlasPollVisibility={sync};
root.addEventListener('pageshow',sync);
root.addEventListener('focus',sync);
document.addEventListener('visibilitychange',sync);
sync();
})(window);
