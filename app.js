const express=require("express")
const async=require("async")
const _=require("lodash")
const callback=require("./response/res.callback")

// async.parallel({
//     one:function(callback)
//     {
//         let c="Hie my name is async.parallel"
//         setTimeout(function(){callback
//         (null,c)},5000)
//     },
//     function(callback)
//     {   
//         let l=99+48;
//         setTimeout(function(){
//             callback(null,`addition of two numbers is ${l}`)
//         },1000)
//     },
//     result:(callback)=>{
//         setTimeout(
//             function(){
//                 callback(err,"bye")
//             },2200
//         )
//     }
// },callback)


// async.series({
//     one:(callback)=>{
//         setTimeout(function(){
//             callback(null,"1")
//         },2000)
//     },
//     two:(callback)=>{
//         setTimeout(
//             function(){
//                 callback(null,2)
//             }
//         ,200)
//     },
//     three:(callback)=>{
//         setTimeout(function(){
//             callback(null,3)
//         },100)
//     }
// },callback)


async.waterfall([
    function one(callback)
    {
        callback(null,7)
    },
    function(data1,callback)
    {
        console.log(data1,">>>>>>>>>>>");
        // if(_.isEmpty(data1))
        // {
        //   var err=new Error("No data is present")
        //     callback("no data found")
        // }
        // else{
            let c=7+data1
            callback(null,c)

        },
    // },
    function(data2,callback)
    {
        let d=8+data2;
        callback(null,d)

    }
],callback)


// async.parallel([
// function(callback)
// {
// async.waterfall([
//     function one(callback)
//     {
//         callback(null,7)
//     },
//     function(data1,callback)
//     {
//         // console.log(data1,">>>>>>>>>>>");
//         // if(_.isEmpty(data1))
//         // {
//         //   var err=new Error("No data is present")
//         //     callback(err)
//         // }
//         // else{
//             let c=7+data1
//             callback(null,c)

//         // }
//     },
//     function(data2,callback)
//     {
//         let d=8+data2;
//         callback(null,d)

//     }
// ],callback)}, 

// function one(callback)
//     {
//         let c="Hie my name is async.parallel"
//         setTimeout(function(){callback
//         (null,c)},5000)
//     },
//     function(callback)
//     {   
//         let l=99+48;
//         setTimeout(function(){
//             callback(null,`addition of two numbers is ${l}`)
//         },1000)
//     },
//   function two(callback){
//         setTimeout(
//             function(){
//                 callback(null,"bye")
//             },2200
//         )
//     }
// ],callback)

// async.parallel([
//     one=(callback)=>{
//         setTimeout(function(){
//             callback(null,1)
//         },5000)
//     },
//     two=(callback)=>{
//         setTimeout(function(){
//             callback(null,2)
//         },500)
//     },
//     three=(callback)=>{
//         setTimeout(function(){
//             callback(null,3)
//         },200)
//     }
// ],callback)