const List = require('../models/List');
// var List = [
//     {
//         desc:'Get vegetable',
//         category:'Personal',
//         date:'08/22/2023'
//     }
// ]
module.exports.homePage = async function(req, res)
{
    const TodoList = await List.find({

    })
    try{
        return res.render('index',{
            title:'Home Page',
            list:TodoList,
        });
        console.log('Router is running');
    }catch(err){
        console.log('Error',err);
    }
}
module.exports.addTodo = async function(req,res){
    try{
       const List_item = await List.create({
            desc:req.body.desc,
            category:req.body.category,
            date:req.body.date
       })

        console.log(req.body);
        return res.redirect('/');
    }catch(err){
        console.log('Error in user',err);
    }
    console.log('User is running');
}

module.exports.deleteList = async function(req,res){
    let id = req.body.checkbox
    console.log(id);

    await List.findByIdAndDelete(id)

    return res.redirect('back');
}