import express from "express";
import { Book } from "../models/bookModels.js";

const router = express.Router();



//route for save a new book
router.post("/", async (req, res) => {
    try {
      if (!req.body.title || !req.body.author || !req.body.publishYear) {
        return res.status(400).send({
          message: "Send all required fields: tile, author, publishYear",
        });
      }
      const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
      };
  
      const book = await Book.create(newBook);
  
      return res.status(201).send(book);
  
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ message: err.message });
    }
  });
  
  
  // get all the books and their amount
  router.get('/', async(req, res)=>{
      try{
          const books = await Book.find({});
  
          return res.status(200).json({
              count:books.length,
              data:books
          });
  
      }catch(error){
          console.log(error.message);
          res.status(500).send({message:error.message});
      }
  })
  
  // get single the book 
  router.get('/:id', async(req, res)=>{
      try{
          const {id} = req.params;
  
          const book= await Book.findById(id);
  
          return res.status(200).json({book});
  
      }catch(error){
          console.log(error.message);
          res.status(500).send({message:error.message});
      }
  });
  
  
  // update books
  router.put("/:id", async (req, res) => {
      try {
        if (
          !req.body.title ||
          !req.body.author ||
          !req.body.publishYear
        ) {
          return res.status(400).send({
            message: "Send all required fields: title, author, publishYear",
          });
        }
    
        const { id } = req.params;
    
        const result = await Book.findByIdAndUpdate(id, req.body);
    
        if (!result) {
          return res.status(404).json({ message: "Book not Found" }); // books can't find
        }
    
        return res.status(200).send({ message: "Book updated Successfully!" }); // Success message
      } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message });
      }
    });
  
    
  
  //   delete single book
  router.delete("/:id", async(req, res)=>{
      try{
          const {id} = req.params;
  
          const result = await Book.findByIdAndDelete(id);
          if(!result){
              return res.status(404).json({message:"Book not found"});
          }
  
          return res.status(200).send({message:"Book Deleted Successfully!"});
          
      }catch(err){
          console.log(err.message);
          res.status(500).send({message:err.message});
      }
  });


  export default router;