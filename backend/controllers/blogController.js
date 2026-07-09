const Blog=require("../models/Blog");
const Newsletter=require("../models/Newsletter");

const getBlogs=async(req,res)=>{
    try{
        const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 });

        res.status(200).json({
            success:true,
            blogs
        });
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        });
    }
};

const getFeaturedBlogs=async(req,res)=>{
try{

const featured=await Blog.find({
featured:true,
published:true
});

res.status(200).json({
success:true,
featured
});

}catch(err){

res.status(500).json({
success:false,
message:err.message
});

}
};

const searchBlogs=async(req,res)=>{

try{

const keyword=req.query.keyword;

const blogs=await Blog.find({

title:{
$regex:keyword,
$options:"i"
}

});

res.status(200).json({

success:true,
blogs

});

}catch(err){

res.status(500).json({

success:false,
message:err.message

});

}

};

const getCategoryBlogs=async(req,res)=>{

try{

const blogs=await Blog.find({

category:req.params.category

});

res.status(200).json({

success:true,
blogs

});

}catch(err){

res.status(500).json({

success:false,
message:err.message

});

}

};

const subscribeNewsletter = async (req, res) => {
  try {

    const { email } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  return res.status(400).json({
    success: false,
    message: "Please enter a valid email address."
  });
}

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required."
      });
    }

    const existingSubscriber = await Newsletter.findOne({ email });

    if (existingSubscriber) {
      return res.status(409).json({
        success: false,
        message: "You are already subscribed to our newsletter."
      });
    }

    const user = await Newsletter.create({
      email
    });

    res.status(201).json({
      success: true,
      message: "Subscribed successfully!",
      user
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again."
    });

  }
};

const createBlog = async (req, res) => {
    try {
        const blog = await Blog.create(req.body);

        res.status(201).json({
            success: true,
            blog,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports={

getBlogs,
getFeaturedBlogs,
getCategoryBlogs,
searchBlogs,
subscribeNewsletter,
createBlog
};