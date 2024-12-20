const jwt=require('jsonwebtoken');
const User=require("../models/usersModel");

const protect=async (req,res,next)=>{
    let token;
    
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
      try {
        token=req.headers.authorization.split(" ")[1];

        const decoded=jwt.verify(token,process.env.JWT_SECRET);
       
        req.user=await User.findById(decoded.id).select("-password");
        next();
       // console.log("Authorized user")
      } catch (error) {
        res.sendStatus(401);
        throw new Error("Not authorized,token failed");
      }
    }

    if(!token){
        res.sendStatus(401);
        throw new Error("Not authorizes,no token");  
    }
};

module.exports={protect};