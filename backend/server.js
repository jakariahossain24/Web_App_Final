const express=require("express");
const app=express();

const books = [ 
  { id: 1, title: "Clean Code", author: "Robert Martin" }, 
  { id: 2, title: "The Pragmatic Programmer", author: "Andy Hunt" }, 
]; 

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
app.listen(3000,() =>{
    console.log("server is running");
})