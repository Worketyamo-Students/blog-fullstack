import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import { HttpCode } from "../core/constants";
import { v4 as uuidv4 } from 'uuid';


const prisma = new PrismaClient()

const blogControllers  = {
//on offre la possibilite de creer un blog et l'envoyer en base de donnees 
    createBlog : async (req : Request, res : Response)=>{

        const { titre, content, vue, sendDate, returnDate} = req.body
        
        const postBlog = await prisma.blog.create({
            data : {
                id : uuidv4(),
                titre,
                content,
                vue,
                sendDate : new Date(sendDate),
                returnDate
            }
        })
        if (!postBlog) {
            return res.status(HttpCode.NO_CONTENT).json({message:'impossible'})
        }
        else{
            return res.status(HttpCode.CREATED).json(postBlog)
        }

    },
// on recupere tous les blogs dans la base de donnee

    getBlog : async (req : Request, res: Response)=>{
        try {
            const blogListes = await prisma.blog.findMany()
            if (!blogListes) {
                return res.status(HttpCode.NO_CONTENT).json({message:'impossible'})
            }
            return res.status(HttpCode.OK).json(blogListes)

        } catch (error) {
            console.log(error); 
        }
    },

// on recupere les blogs dans la base de donnee en fonction de l'identifiant
    getBlogByID : async (req : Request, res: Response)=>{
        const { id }  =  req.params
       
        try {
            const blogByID = await prisma.blog.findUnique({
                where: {
                    id 
                }
            })
    
            if (!blogByID) {
                return res.status(HttpCode.NOT_FOUND).json({message: `Impossible de trouver le blog avec l'id fourni`})
            }
            return res.status(HttpCode.OK).json(blogByID)
            
        } catch (error) {
            console.log(error);
            res.status(HttpCode.INTERNAL_SERVER_ERROR).json({message: 'erreur serveur'})
        }
    },

// On offre la possibilite de modifier le blog

    updateBlog : async (req : Request, res : Response) => {
        const { id } = req.params
        const { titre, content, vue, returnDate}  = req.body
            try {
                const updateBlog  = await prisma.blog.update({
                    where : {
                        id
                    },
                    data : {
                        titre,
                        content,
                        vue,
                        returnDate
                    }

                })
                return res.status(HttpCode.OK).json({message: 'Modifications effectue avec success', updateBlog})
                
            } catch (error) {
                console.log(error);
                res.status(HttpCode.INTERNAL_SERVER_ERROR).json({message: 'erreur serveur'})  
            }

        
    },

// On offre la possibilite de supprimer un blog de la base de donnees   

    deleteBlog : async (req: Request, res:Response) =>{
        const {id} = req.params
            try {
                const deleteBlog = await prisma.blog.delete({
                    where: {
                        id
                    }
                })
                return res.status(HttpCode.OK).json({message: 'Suppression effectue avec success'})
            } catch (error) {
                console.log(error);
                res.status(HttpCode.INTERNAL_SERVER_ERROR).json({message: 'erreur serveur'})
                
            }
    }

}



export default blogControllers