const express=require("express");
const app=express();

app.use(express.json());

const books = [ 
  { id: 1, title: "Clean Code", author: "Robert Martin" }, 
  { id: 2, title: "The Pragmatic Programmer", author: "Andy Hunt" }, 
]; 
let students=[];

//get/books 
app.get("/books",(req,res)=>{
    res.json(books);
});

//get/books/:id
app.get("/books/:id",(req,res)=>{
    const id=Number(req.params.id);

    const book=books.find((book)=>book.id===id);
    if(!book){
        return res.status(404).json({
            message:"Book not found"
        })
    }
})

//post
app.post("/students",(req,res)=>{
    const {name,department}=req.body;

    if(!name || !department){
        return res.status(400).json({
            message:"Name and department required"
        })
    }
    const student={
        id:students.length+1,
        name:name,
        department:department
    };
    students.push(student);
})


app.listen(3000,() =>{
    console.log("server is running");
})

//async+await 

app.get("/students/department", async (req,res)=>{
    try{
        const {department}=req.params;
        const [rows]=await db.query(
            "SELECT * FROM students WHERE department=?", [department]);
            if(rows.length===0){
                return res.status(404).json({
                    message:" "
                })
            }
            res.status(200).json();

    }catch(err){
        console.error(err);
        res.status(500).json({
            message:"server error"
        })
    }

})