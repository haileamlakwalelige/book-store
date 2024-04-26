import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ShowBook from "./pages/ShowBook";
import DeleteBooks from "./pages/DeleteBooks";
import CreateBooks from "./pages/CreateBooks";
import EditBook from "./pages/EditBook";
import Detail from "./pages/Detail";

export default function App() {
  return (
   <div>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/books/show/:id" element={<ShowBook />} />
    <Route path="/books/detail/:id" element={<Detail />} />
    <Route path="/books/delete/:id" element={<DeleteBooks />} />
    <Route path="/books/create" element={<CreateBooks />} />
    <Route path="/books/edit/:id" element={<EditBook />} />
     </Routes>
   </div>
  )
}