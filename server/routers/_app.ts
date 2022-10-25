import {z} from 'zod';
import { publicProcedure, router} from '../trpc';
import { PrismaClient } from '@prisma/client';
import { info } from 'console';

const prisma = new PrismaClient();

export  const  appRouter =  router({
    coins: publicProcedure
    .query(async()=>{
            const data =  await prisma.coinoscope.findMany({
                select:{
                    key:true,
                    fecha:true,
                    nombreOriginal:true,
                    remainingQueryCount:true,
                    items:true,
                    localization:true
                }
            })
        return data
    }),
    getCorrectasKeys: publicProcedure
    .query(async()=>{
        const correctas = await prisma.coinoscope.findMany({
            where:{
               items:{
                    some:{
                        isCorrecto:true
                    }
                }
            },
            select:{
                key:true,
                items:true

            }
        })
        return correctas
    }),
    getIds: publicProcedure
    .query(async()=>{
        const ids = await prisma.coinoscope.findMany({
            select:{
                key:true
            }
        })
        return ids
    }),
    getCoin: publicProcedure
    .input(
        z.object({
            key:z.string()
        })
    )
    .query(async({input})=>{
        const coin = await prisma.coinoscope.findFirst({
            where:{
                key:input.key
            },
            select:{
                key:true,
                fecha:true,
                nombreOriginal:true,
                remainingQueryCount:true,
                items:true,
                localization:true
            }
        })
        return coin

    }),
    updateCoin: publicProcedure
    .input(
        z.object({
            id:z.number(),
            isCorrecto:z.boolean()
        })
    )
    .mutation(async({input})=>{
        const data = await prisma.item.update({
            where:{
                id:input.id
            },
            data:{
                isCorrecto:input.isCorrecto
            }
        })
        return data
    })
})

export type AppRouter = typeof appRouter;
