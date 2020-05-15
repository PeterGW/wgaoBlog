---
home: true
heroImage: /assets/img/logo.png
heroImageStyle: {
  maxWidth: '800px',
  width: '100%',
  height: '15%',,
  display: block,
  margin: '16% auto -18% auto',
  //border: '1px dashed #000',
  box-shadow: '8px 8px 20px #022',
  borderRadius: '1rem',
  background: 'rgba(0, 0, 0, 0.8) none repeat scroll !important',
}
heroText: 百二秦关终属楚 三千越甲可吞吴
tagline: 人在江湖飘，怎能不挨刀
actionText: 点此体验 →
actionLink: /views/
features:
- title: 
  details: 勤奋刻苦。
- title: 
  details: 贵在坚持。
- title: 
  details: 积极主动。
footer: MIT Licensed | Copyright © 2018-present Evan You
---

::: tip 江湖

“天涯远不远” <br/>
“不远” <br/>
“人就在天涯，天涯怎么会远？” <br/>

“明月是什么颜色？” <br/>
“是蓝的，就像海一样蓝，一样深，一样忧郁。” <br/>
“明月在那里？” <br/>
“就在他心里，他的心就是明月。” <br/>

“刀呢？” <br/>
“刀就在他手里！” <br/>
“那是柄什么样的刀？” <br/>
“他的刀如天涯般辽阔寂寞，如明月般皎洁忧郁，有时一刀挥出，又彷佛是空的！” <br/>
“空的？” <br/>
“空空蒙蒙，缥缈虚幻，彷佛根本不存在，又彷佛到处都在。” <br/>
“可是他的刀看来并不快。” <br/>
“不快的刀，为什么能无敌于天下？” <br/>
“因为他的刀已超越了速度的极限！” <br/>

:::


<style>
.home img {
   transform: scale(0.8,0.8) !important;
   transition: all 1s!important;
}
.home img:hover {
   transform: scale(1)!important;
   transition: all 2s !important;
}
.home .hero h1{
    color: #f71605;
    font-size: 56px !important;
    display: inline-block;
    text-align: left;
    /* background: linear-gradient(left, #f71605, #e0f513); 
    background: -o-linear-gradient(right, #f71605, #e0f513);
    background: -webkit-linear-gradient(left, #f71605, #e0f513);
    -webkit-animation:scratchy 10s linear infinite;
    -webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation:scratchy 10s linear forwards infinite;
        -moz-animation: scratchy 10s linear forwards infinite;
	    -ms-animation: scratchy 10s linear forwards infinite;
	    -o-animation: scratchy 10s linear forwards infinite; */
    /* backgound: linear-gradient(left, #f71605, #e0f513);  */
    animation: blink 3s linear infinite;
    /* animation: scratchy 0.253s linear forwards infinite; */
}

@keyframes blink{
  0% {opacity: 1;}
  50% {opacity: .5;}
  100% {opacity: 0;} 
}

@keyframes typing{
  from {
    width: 0;
  }
}
</style>