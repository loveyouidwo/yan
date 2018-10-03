(function(window){
    my_tab();
})(window);



/*选项卡的设计*/
function  my_tab() {
    //获取所需的标签
    let allLis = $("tab_bot").getElementsByTagName("li");
    let doms = $("tab_top").getElementsByClassName("dom");
    let onelist = 0;

    //遍历
    for(let i=0;i<allLis.length;i++){
        let ali = allLis[i];
        (function(i){
            ali.onclick = function() {
                //清空
                allLis[onelist].className="" ;
                doms[onelist].style.display = "none";
                //设置
                this.className = "current";
                doms[i].style.display = "block";
                //赋值
                onelist = i;
            }
        })(i)
    }
}

function $(id){
    return typeof id === "string"?document.getElementById(id):null;
}
