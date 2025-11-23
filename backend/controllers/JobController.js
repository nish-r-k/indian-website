const job=require("../models/Job");


exports.addJob = async (req, res) => {
  try {
    const newJob = new job({
      title: req.body.title,
      location: req.body.location,
      type: req.body.type,
      overview: req.body.overview,
      responsibilities: req.body.responsibilities,
      requirements: req.body.requirements,
      benefits: req.body.benefits
    });

    await newJob.save();
    res.status(201).json({ message: "Job added successfully", job: newJob });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add job" });
  }
};



exports.getJobs=async(req,res)=>{
    try{
        const jobs=await job.find();    
        res.status(200).json(jobs);
    }catch(error){
        console.error(error);
        res.status(500).json({error:"Failed to fetch jobs"});
    }
};
exports.deleteJob=async(req,res)=>{
    try{
        const jobId=req.params.id;
        await job.findByIdAndDelete(jobId);
        res.status(200).json({message:"Job deleted successfully"});
    }catch(error){  
        console.error(error);
        res.status(500).json({error:"Failed to delete job"});
    }
};
exports.updateJob=async(req,res)=>{
    try{
        const jobId=req.params.id;
        const updates=req.body;
        const updatedJob=await job.find
ByIdAndUpdate
(jobId,updates,{new:true});
        res.status(200).json({message:"Job updated successfully", job:updatedJob});
    }catch(error){
        console.error(error);
        res.status(500).json({error:"Failed to update job"});
    }
};

