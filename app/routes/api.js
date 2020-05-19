var User 		= require('../models/user');

function isEmpty(val){
	return val=='' || val==null;
}

module.exports = function(router){
    
    // add review users
    router.post('/review', function(req,res){
        var user = new User();
        
        user.name = req.body.name;
        user.email = req.body.email;
        user.mobile = req.body.mobile;
		user.rating = req.body.rating;
		user.review = req.body.review;

        if(isEmpty(req.body.name) || isEmpty(req.body.email) || isEmpty(req.body.mobile) || isEmpty(req.body.rating) || isEmpty(req.body.review)){
            res.json({success:false,msg:'Ensure all fields were provided'});
        }
        else{
            user.save(function(err){
                if(err) {
                    res.json({success:false,msg:'error !'});
                }
                else{
                    res.json({success:true,msg:'Review successfully submitted !'});
                }
            });
        }
    });

    //get all reviews
    router.get('/review', function(req,res){
        User.find({}).exec(function(err, data){
            if(err){ throw err; }
            else {
                res.json({success: true,data: data});
            }
        })
    });
    
    return router;
};