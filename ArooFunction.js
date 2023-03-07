//  function fun_one() 
 
// { 
//     return "welcome to arrow function"; 
// } 
// fun_one(); 
 
 
// let fun_one=()=>"welcomee to arrow function"; 
// console.log(fun_one()); 
 
//template literal 
 
// let fun_one=(arg1)=>`welcome to arrow function ${arg1}`; 
// //console.log(fun_one); 
// console.log(fun_one("para_1")); 
// console.log(()=>{}); 
 
 
// let fun_one=(arg1)=>`welcomee to arrow function 1 ${arg1}`; 
 
// let fun_two=(arg2)=>`welcomee to arrow function 2 ${arg2}`; 
 
// let fun_three=(arg3)=>`welcomee to arrow function 3 ${arg3}`; 
//  console.log(fun_one("hello fun_1,"),fun_two("hello fun_2,"),fun_three("hello fun_3")); 
 
 
//  let fun_one=(arg1)=>` ${arg1()}`; 
//  let  test=()=>"test"; 
//  console.log(fun_one(test)); 
 
//---------------------------------- arrrow funtion into arrow fun into arrow function---------- 
// let fun_one=()=> 
// { 
//     return ()=> 
//     { 
//         return "hello"; 
//     }; 
 
// }; 
// let callback=fun_one(); 
// console.log(callback);//[function:anoymous]because fun_one->()[anoymouse fun call and return  
                    // "hello"  store in callback..so callbak only return anonymous type] 
// let fun_one=()=> 
// { 
//     return ()=> 
//     { 
//          return "hello"; 
//     }; 
                     
// }; 
// let callback=fun_one(); 
// console.log(callback()); //callback() ->call->return ->"hello" 
 
 
 
// let fun_one=(arg)=> 
// { 
//     return arg; 
// }; 
// let callback=()=> 
// { 
//     return "hellow"; 
// }; 
// console.log(fun_one(callback()));//fun_one->call->as a arg callback()->return->hello-> 
//                                 //output->hellow 
 
//------------------------------------- 
// let fun_one=(arg)=> 
// { 
//     return arg(); 
 
// }; 
// console.log(fun_one(()=> 
//                     { 
//                         return "hello"; 
//                     })); 
                     
// fun_one call->anonymoys fun pass as a arg in fun_one->arg call->arg()-> 
// output->"hello" 
//---------------------------------------- 
 
// let fun_one=()=> 
// { 
//     return ()=> 
//     { 
//         return ()=> 
//         { 
//             return "hello"; 
//         }; 
//     }; 
// }; 
// console.log(fun_one()()());  
 
//----------------------------------------------- 
 
let fun_one=(arg1,arg2,arg3)=> 
{ 
    console.log(arg1(),arg2(),arg3()); 
}; 
// fun_one(()=>{return "hellow-1";}, 
//         ()=>{return "hello-2";}, 
//         ()=>{return "hello-3";}); 
    //1]method- hello1,hwllo2,hellow3 pass as a arg and call arg ->output->   hello1,hwllo2,hellow3  
 
    fun_one(()=>"hellow_1", 
            ()=>"hello-2", 
            ()=>"hello-3" );      
    //2] method- in anonymous fun->if 1 statement->no need to return ->{}->only single line