import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {User} from "../models/user.model.js";
import { uplodaOnCloudiinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler( async (req,res) => {

    // checking if no field is unfilled
    const {email,fullname,username,password} = req.body;
    if([fullname,email,username,password].some((field) => field?.trim() === "")){
        throw new ApiError(400,"All Fields Are Required");
    }
    console.log(req.body);

    // checking if user already exist
    const existedUser = await User.findOne({
        $or : [{username},{email}]
    });
    if(existedUser){
        throw new ApiError(409,"User Already Exist")
    }

    // check the photos that are going to be uploaded 

    const avatarLocalPath = req.files?.avatar[0]?.path;
    // const coverImageLocalPath = req.files?.coverImage[0]?.path;

    let coverImageLocalPath;
    if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0){
        coverImageLocalPath = req.files.coverImage[0].path;
    }

    if(!avatarLocalPath){
        throw new ApiError(400,"Avatar Field is requried");
    }

    const avatarcloud = await uplodaOnCloudiinary(avatarLocalPath);
    

    if(!coverImageLocalPath){
        throw new ApiError(400,"coverImage is required");
    }

    const coverImagecloud = await uplodaOnCloudiinary(coverImageLocalPath);

    // creating User
    // most time i spent here on avatar where i was writing avatar.url but after hour of trying different things i log the avatarcloud and it was url itself not a object 😑😩
    // not i know why, cause from cloudinary i am returning response.url rather than whole response

    const user = await User.create({
        fullname,
        avatar : avatarcloud,
        coverImage : coverImagecloud || "",
        email,
        password,
        username : username.toLowerCase()
    })

    // removing password and refreshToken from created User
    const cratedUser = await User.findById(user._id).select("-password -refreshToken")

    if(!cratedUser){
        throw new ApiError(500,"Something went wrong on the server")
    }

    return res.status(201).json(new ApiResponse(200,cratedUser,"User REgistered SuccesFully"));
})

export {registerUser}
