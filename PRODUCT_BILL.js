// let Product_Name = ['Keyboard' ,'Mouse']
// let Price = [700,100]
// let Qty = [100,100]
// let Amount = [70000,10000]
// let Discount = 10
// let Gst = 18

// let amt = Math.imul(Price,Qty)
// console.log (amt);

// let disc = Math.imul (Amount,Discount)/100
// console.log (disc);

// let Dis_amu = amt-disc;
// console.log (Dis_amu);

// let Gst_Amt = Math.imul (Dis_amu,Gst)/100
// console.log (Gst_Amt);

// let bill_amt = Dis_amu+Gst_Amt
// console.log (bill_amt);

// console.log("product\t\tprice\t\tqtyamt\t\tdisc\t\tdisc_amt\tdiscounted_amt\t\tgst_amt\t\tbill_amt ")

// let product = ["keyboard", "Mouse", "Monitor", "Pro", "RAM", "book"];
// let price = [700, 100, 5500, 11000, 8000, 50];
// let qty = [100, 100, 40, 30, 80, 20];
// let discount = 10;
// let gst = 18;
// for (let i = 0; i < product.length, i < price.length, i < qty.length; i++) {

//     let amt = Math.imul(price[i], qty[i]);
//     let disc = Math.imul(amt, discount) / 100;
//     let disc_amt = amt - disc;
//     let gst_amt = Math.imul(disc_amt, gst) / 100;
//     let bill_amt = disc_amt + gst_amt;


//     console.log(product[i], price[i], qty[i], amt, disc, disc_amt, gst_amt, bill_amt); // here i represents index 
// }









// let cart = {
//     product :  ["Keyboard", "Mouse", "Monitor", "Pro", "RAM", "book"] ,
//     pricr :  [700, 100, 5500, 11000, 8000, 50],
//     qty : [100, 100, 40, 30, 80, 20]
// }
// // console.log (cart.product[0])
// // cart.foreach (cart => console.log(cart))
// for (let i = 0; i < product.length, i < price.length, i < qty.length; i++) {

//         let amt = Math.imul(price[i], qty[i]);
//         let disc = Math.imul(amt, discount) / 100;
//         let disc_amt = amt - disc;
//         let gst_amt = Math.imul(disc_amt, gst) / 100;
//         let bill_amt = disc_amt + gst_amt;


//         console.log(product[i], price[i], qty[i], amt, disc, disc_amt, gst_amt, bill_amt); // here i represents index 
//     }



// let cart1 = [{
//     product :  ["Keyboard", "Mouse", "Monitor", "Pro", "RAM", "book"] ,
//     price :  [700, 100, 5500, 11000, 8000, 50],
//     qty : [100, 100, 40, 30, 80, 20]
// }];
// let discount = 10;
// let gst = 18;
// let amt;

// cart1.forEach(Element=> {

//     let amt = Math.imul(Element.price, Element.qty);
//     let disc = Math.imul(amt, discount) / 100;
//     let disc_amt = amt - disc;
//     let gst_amt = Math.imul(disc_amt, gst) / 100;
//     let bill_amt = disc_amt + gst_amt;

//     console.log(Element.product, Element.price, Element.qty, amt, disc, disc_amt, gst_amt, bill_amt); // here i represents index 
// });



let pro=[
    {id:"1" , productName : "Keybord" ,price : "700" ,qty : "100"},
    {id:"2" , productName : "Mouse" ,price : "100" ,qty : "100"},
    {id:"3" , productName : "Monitor" ,price : "5500" ,qty : "40"},
    {id:"4" , productName : "Pro" ,price : "11000" ,qty : "30"},
    {id:"5" , productName : "RAM" ,price : "8000" ,qty : "30"},
];
let product=pro.map((p)=>{
    p.amt=p.price*p.qty;
    p.dics=p.amt*0.10;
    p.disc_amt = p.amt -  p.dics;
    p.gst = p.disc_amt * 18/100;
    p.bill_amt = p.disc_amt + p.gst;
    p.productName = p.productName.toUpperCase();
    return p;


});
console.log(product);