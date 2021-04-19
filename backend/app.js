const express=require('express');
const bodyParser=require('body-parser');

const mongoose=require('mongoose')
const subjectList=require('./router/subjectRouter').subjectList;
const questionList=require('./router/questionRouter').questionList
const user=require('./router/userRouter')
const answer=require('./router/answerRouter').answerList

const app=express();

app.use(bodyParser.json());


app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','*');//Origin, X-Requested-With, Authorization, Content-Type,Access
    res.setHeader('Access-Control-Allow-Methods','*')
    next();
})

app.post('/subjects',subjectList);
app.post('/questions',questionList);
app.post('/login',user.userLogin)
app.post('/signup',user.userSignup);
app.post('/answer',answer)

 mongoose.connect('mongodb+srv://user:123abc@cluster0.ltb0w.mongodb.net/quizz?retryWrites=true&w=majority', {
    useUnifiedTopology: true,             //THIS MIGHT RISE ERROR IN THE FUTURE
    useCreateIndex:true,
    useNewUrlParser: true
})
.then(()=>{
    console.log('successfully connected to the database');
    app.listen(process.env.PORT || 5000);
     
})
.catch(err=>{
    console.log(err);
});
