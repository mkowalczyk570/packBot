import functions from "./backpack.js"

try{
    const res = await functions.priceCheckItem("Rocket Jumper")
    console.log(res)
}catch(e){
    console.log(e)
}