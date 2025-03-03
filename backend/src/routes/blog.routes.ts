import { Router } from "express";
import blogControllers from "../controllers/blog.controllers";

const router = Router()

const routes = {
   CREATE_BLOG : '/create',
   GET_BLOG : '/blogs',
   GET_BLOG_BY_ID : '/blogs/:id',
   UPDATE_BLOG : '/blogs/modify/:id' ,
   DELETE_BLOG : '/blogs/delete/:id'

}



router.post(routes.CREATE_BLOG, blogControllers.createBlog)
router.get(routes.GET_BLOG, blogControllers.getBlog)
router.get(routes.GET_BLOG_BY_ID, blogControllers.getBlogByID)
router.put(routes.UPDATE_BLOG, blogControllers.updateBlog)
router.delete(routes.DELETE_BLOG, blogControllers.deleteBlog)





export default router