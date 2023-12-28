import prisma from "@/app/libs/prismadb"
import getSesstion from "./getSession"

const getCurrentUser = async () => {
    try{
        const session = await getSesstion();

        if(!session?.user?.email){
            return null
        }

        const currentUser = await prisma.user.findUnique({
            where:{
                email: session.user.email as string
            }
        });

        return currentUser;
        
    }catch (error: any){
        return null
    }
}

export default getCurrentUser