import React from "react";


const ApplyForm = () => {
return (
<div className="px-10 pt-32 pb-16 max-w-4xl mx-auto">
<h1 className="text-3xl font-bold mb-8">Apply Now</h1>


<form className="space-y-6">
<div>
<label className="font-semibold">Full Name</label>
<input type="text" placeholder="Enter your name" className="w-full border p-3 rounded-lg mt-2" />
</div>


<div>
<label className="font-semibold">Email Address</label>
<input type="email" placeholder="email@example.com" className="w-full border p-3 rounded-lg mt-2" />
</div>


<div>
<label className="font-semibold">Phone Number</label>
<input type="text" placeholder="(123) 456-7890" className="w-full border p-3 rounded-lg mt-2" />
</div>


<div>
<label className="font-semibold">Upload Resume</label>
<input type="file" className="w-full border p-3 rounded-lg mt-2" accept=".pdf,.doc,.docx" />
</div>


<div>
<label className="font-semibold">Why are you interested? (Optional)</label>
<textarea className="w-full border p-3 rounded-lg mt-2" rows="4" placeholder="Tell us something..."></textarea>
</div>


<button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">Submit Application</button>
</form>
</div>
);
};


export default ApplyForm;