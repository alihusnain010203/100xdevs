import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createUser(email:string,password:string,firstName:string,lastName:string) {

 const res=await   prisma.user.create({
        data:{
            email:email,
            password:password,
            firstName:firstName,
            lastName:lastName
        },
        select:{
            id:true
        }
    })

console.log(res);

    
}

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(email: string, {
    firstName,
    lastName
}: UpdateParams) {
  const res = await prisma.user.update({
    where: { email },
    data: {
      firstName,
      lastName
    },
    select:{
        id:true,
        firstName:true,
        lastName:true
    }
  });
  console.log(res);
}

async function getUser(email:string){
   const res=await prisma.user.findUnique({
         where:{
              email:email
         },
            select:{
                id:true,
                email:true,
                firstName:true,
                lastName:true
            }
   })
    console.log(res);
}

getUser("a@gmail.com");