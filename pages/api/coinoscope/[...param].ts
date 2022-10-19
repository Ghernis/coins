// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Coinoscope = {
    key: string
    remainingQueryCount: number
    fecha: string
    nombreOriginal: string
    calendarDate: string
    localization: any
    items: any[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {param=['get']} = req.query
    const {data} = req.body
    switch(param[0]){
        case 'create':{
            const resp = await prisma.coinoscope.create({
                data:{
                    key:data.key,
                    remainingQueryCount:data.remainingQueryCount,
                    nombreOriginal:data.nombreOriginal,
                    calendarDate:data.calendarDate,
                    localization:{
                        create:data.localization
                    },
                    items:{
                        create:data.items
                    }
                }
            })
            res.status(200).json(resp)
            break;
        }
        case 'get':{
            if(param.length==2){
                const resp = await prisma.coinoscope.findMany({
                    where:{
                        key:param[1]
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

                res.status(200).json(resp)
            }
            else{
                const resp = await prisma.coinoscope.findMany({
                    select:{
                        key:true,
                        fecha:true,
                        nombreOriginal:true,
                        remainingQueryCount:true,
                        items:true,
                        localization:true
                    }
                })

                res.status(200).json(resp)
            }
            break;
        }
    }

}
