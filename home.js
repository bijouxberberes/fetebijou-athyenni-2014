(function(){'use strict';var foregroundVideoPlaying=false;var currentIndex=0;var ios=navigator.userAgent.indexOf('iPhone')>-1||navigator.userAgent.indexOf('iPad')>-1||navigator.userAgent.indexOf('iPod')>-1;$(function(){$('#fullpage').fullpage({css3:true,resize:false,afterRender:afterRender,afterLoad:afterLoad,navigation:true});});function afterRender(){$('.indicators').click(function(){$.fn.fullpage.moveSectionDown();});$('.loading').fadeOut('slow');playBackgroundVideo();}
function afterLoad(anchorLink,index){if(index==1&&!foregroundVideoPlaying){playBackgroundVideo();}else{pauseBackgroundVideo();}
currentIndex=index;}
function playBackgroundVideo(){if(!$('.bg-video').get(0)){window.console&&console.warn&&console.warn('no bg video');return;}
$('.bg-video').get(0).play();}
function pauseBackgroundVideo(){if(!$('.bg-video').get(0)){window.console&&console.warn&&console.warn('no bg video');return;}
$('.bg-video').get(0)&&$('.bg-video').get(0).pause();}
function playForegroundVideo(){if(foregroundVideoPlaying){return;}
if(!$('.fg-video').get(0)){window.console&&console.warn&&console.warn('no fg video');return;}
pauseBackgroundVideo();$('.video-popup').fadeIn('fast');$('#fullPage-nav').hide();try{$('.fg-video').get(0).currentTime=0;}catch(e){}
$('.fg-video').get(0).play();foregroundVideoPlaying=true;}
function stopForegroundVideo(){if(!foregroundVideoPlaying){return;}
if(!$('.fg-video').get(0)){window.console&&console.warn&&console.warn('no fg video');return;}
$('#fullPage-nav').show();$('.video-popup').fadeOut('fast');$('.fg-video').get(0).pause();foregroundVideoPlaying=false;if(currentIndex==1){playBackgroundVideo();}}
$(function(){if(ios){$('.bg-video').hide();}
$('.play-video-button').click(playForegroundVideo);$('.video-popup .close-icon').click(stopForegroundVideo);$('.fg-video').bind('ended',stopForegroundVideo);$(window).keydown(function(e){if(e.keyCode==27){stopForegroundVideo();}});});})();