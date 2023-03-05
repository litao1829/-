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
        },3000);
}