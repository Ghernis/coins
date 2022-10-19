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
    const {data} = req.body
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
}
