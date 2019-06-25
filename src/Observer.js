/*

    事件存放的仓库

        多个事件
        每个事件会对应多个事件函数

        aaa:[]
        haha:[]

    eventList:{
        key:[]
    }


    $on 事件绑定  eventName callback
        一个事件对应多个事件函数
        1、分析绑定的这个事件名称在事件仓库中是否存在 如果存在则直接将事件函数添加到数组中去
        2、如果不存在则创建一个数组然后将事件函数添加到数组中去

    $emit 事件的触发  eventName params

        1、分析当前事件名称是否存在,如果存在则遍历数组中所有的事件进行触发  将参数传递到数组中去


    $off  事件解绑  eventName callback
        1.分析当前事件名称是否存在  如果存在则 判断第二个参数是否存在  如果存在则 解绑对应的函数
        如果不存在则解绑全部

*/


let eventList = {

}


const $on = (eventName,callback)=>{
    if(!eventList[eventName]){
        eventList[eventName] = [];
    }

    eventList[eventName].push(callback);
}

const $emit = (eventName,params)=>{
    if(eventList[eventName]){
        eventList[eventName].forEach((cb)=>{
            cb(params);
        })
    }
}


const $off = (eventName,callback)=>{
    if(eventList[eventName]){
        if(callback){
            
            let index = eventList[eventName].indexOf(callback);
            eventList[eventName].splice(index,1);

        }else{
            eventList[eventName].length = 0;
        }
    }
}


export default {
    $on,
    $emit,
    $off
}
