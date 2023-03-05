window.onload=function(){
    //定时器实现关键词切换
//1.获取搜索框的输入表单对象
{
    
    let input =document.querySelector(".search input");

//2.设置关键词数组
const keywords=["Vue3.0","React","爬虫技术","JAVA","多线程"];

//3.使用setInterval每隔两秒切换一个关键词
let i=0;
input.placeholder=keywords[i];
setInterval(()=>{
    i++;
    if(i===5)
    {
        i=0;
    }
    input.placeholder=keywords[i];
},2000);
}
//轮播

//定义轮播图的数组
    const imgs=[
        {
            path:'./images/swiper/swiper-1.jpg',
            url:'https://www.imooc.com/',
            bg:'./images/swiper/bj-1.jpg'
        },
        {
            path:'./images/swiper/swiper-2.jpg',
            url:'https://www.imooc.com/',
            bg:'./images/swiper/bj-2.jpg'
        },
        {
            path:'./images/swiper/swiper-3.jpg',
            url:'https://www.imooc.com/',
            bg:'./images/swiper/bj-3.jpg'
        },
        {
            path:'./images/swiper/swiper-4.jpg',
            url:'https://www.imooc.com/',
            bg:'./images/swiper/bj-4.jpg'
        }
        ];
        
        //找到sweiper下的A标签
        const swiperA=document.querySelector(".swiper a");
        //找到最外面的div要加渐变颜色
        const banner=document.querySelector("#banner");

        //定义定时器
        let timer=null;
        //数组索引
        let i=0;


        //找到左右切换的链接
        const prev=document.querySelector(".prev");
        const next=document.querySelector(".next");

        var arr=document.querySelectorAll(".circle-list li");
        console.log(arr.length);
        for(let a=0;a<arr.length;a++)
        {
            const lis=arr[a];
            lis.onclick=function()
            {
                for(let c=0;c<arr.length;c++)
                {
                    const temp=arr[c];
                    temp.className="";
                }
                i=a;
                changeImg(a);
                lis.className="current";
            }
        }
        function listchange(index)
        {
                    const list=arr[index];
                    for(let c=0;c<arr.length;c++)
                    {
                        const temp=arr[c];
                        temp.className="";
                    }
                    list.className="current";
        }

        function changeImg(index){
            const obj=imgs[index];
            swiperA.style.backgroundImage=`url(${obj.path})`;
            swiperA.href=obj.url;
            banner.style.backgroundImage=`url(${obj.bg})`;
        }
        
        //初始化轮播图，显示第一张图
        changeImg(i);

        timer=setInterval(()=>{
            i++;
            if(i===4){
                i=0;
            }
            console.log(i);
            changeImg(i);
            listchange(i);
        },3000);

        //定义一个标志
        let flag=true;
        prev.onclick=function(){
            i=i-1;
            if(i===-1){
                i=3;
            }
           listchange(i);
            changeImg(i);
        }
        next.onclick=function(){
            i=i+1;
            if(i===4)
            {
                i=0;
            }
            listchange(i);
            changeImg(i);
        }




        //倒计时
        //获取结束时间的时间戳
        let endtime=new Date("2023-03-05 19:51:00");
        endtime=parseInt(endtime.getTime()/1000);


        let timer2=null;

        //获取页面的小时、分钟、秒数
        const hourdom=document.getElementById("hour");
        const mindom=document.getElementById("min");
        const secdom=document.getElementById("sec");

        //
        function countdown(){
            //获取当前的时间戳
            let currenttime=new Date();
            currenttime=parseInt(currenttime.getTime()/1000);
            let second=endtime-currenttime;

           if(second>=0){
             //
             let hour=parseInt(second/3600);
             hour=hour>9?hour:"0"+hour;
             let mins=parseInt((second%3600)/60);
             mins=mins>9?mins:"0"+mins;
             let se=parseInt((second%3600)%60);
             se=se>9?se:"0"+se;
                hourdom.innerText=hour;
                mindom.innerText=mins;
                secdom.innerText=se;
           }else{
                //定时器清空
                clearInterval(timer2);
                document.querySelector('.countdown p').innerHTML='拼团已结束';
                hourdom.innerText="00";
                mindom.innerText="00";
                secdom.innerText="00";
           }
        }


        //启动定时器
        timer2=setInterval(()=>{
            countdown();
        },1000);



        //滚动课程
        const ul=document.querySelector(".sk-list ul");
        let timer3=null;
        let leftpx=0;
        timer3=setInterval(()=>{
            leftpx=--leftpx;
            if(leftpx<-1920){
                leftpx=0;
            }
            ul.style.left=leftpx+"px";
        },10);

        ul.onmouseenter=function(){
            clearInterval(timer3);
        };
        ul.onmouseleave=function(){
            timer3=setInterval(()=>{
                leftpx=--leftpx;
                if(leftpx<-1920){
                    leftpx=0;
                }
                ul.style.left=leftpx+"px";
            },10);
        };
}