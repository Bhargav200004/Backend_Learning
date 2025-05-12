import { asyncHandler } from '../utlis/asyncHandler.js';
import { ApiError } from '../utlis/ApiError.js';
import { User } from '../models/user.model.js';
import { uploadCloudanary } from '../utlis/cloudinary.js';
import { ApiResponse } from '../utlis/ApiResponse.js';

const registerUser = asyncHandler(async (req, res) => {
  /**
   * 1. Take input form the user
   * 2. check input are wright or wrong
   * 3. check if user already exsit or not
   * 4. check avtar and coverImage
   * 5. upload cloudnary
   * 4. store data in the database
   *      a.encrypt password
   *      b.store the encrypted password in database with user id and other details
   * 5. sent 201 created status with message successfully register
   */

  const { fullName, username, email, password } = req.body;

  if (
    [fullName, username, email, password].some((field) => field?.trim() === '')
  ) {
    throw new ApiError(400, 'All field are required');
  }

  const exsitedUser = User.findOne({
    $or: [{ username }, { email }],
  });

  if (exsitedUser) {
    throw new ApiError(409, 'User already exsist');
  }

  console.log("Avatar => " , req.files?.avatar);

  const avatarLocalPath =  req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file required");
  }

  const avatar = await uploadCloudanary(avatarLocalPath);
  const coverImage = await uploadCloudanary(coverImageLocalPath);

  if (!avatar){
    throw new ApiError(400, "Avatar file required");
  }

  const user = await User.create({
    fullName,
    username : username.toLowercase(),
    avatar: avatar.url,
    coverImage : coverImage?.url || "",
    email,
    password
  })

  const createduser = await User.findById(user._id).select(
    "-password -refreshToken"
  )

  if (!coverImage){
    throw new ApiError(500 , "Something went wrong while register user");
  }

  return  res.status(201).json(
    new ApiResponse(200 , createduser , "User Register Successfully")
  )
  

});

export  {registerUser} ;
