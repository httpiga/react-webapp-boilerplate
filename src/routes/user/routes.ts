import { Request, Response } from 'express'
import { checkEmailIsUnique } from '../../middleware/checks'
import { Route } from '../../utils'
import { createUser } from './UserController'

const userRoutes: Route[] = [
  {
    path: '/api/user',
    method: 'get',
    handler: [
      async (req: Request, res: Response) => {
        res.status(200).send([{ name: 'Foo' }, { name: 'Bar' }])
      },
    ],
  },
  {
    path: '/api/user',
    method: 'post',
    handler: [
      checkEmailIsUnique,
      async ({ body }: Request, res: Response) => {
        let user = await createUser(body)
        res.status(201).send({ user })
      },
    ],
  },
]

export default userRoutes
