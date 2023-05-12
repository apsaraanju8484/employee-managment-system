const  mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/ems',()=>{
 console.log('Mongodb connected successfully');
})

const Employee=mongoose.model('Employee',{
 id:String,
 uname:String,
 age:String,
 desg:String,
 salary:Number
})

module.exports={
 Employee
}