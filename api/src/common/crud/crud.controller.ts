import { Request, Response } from 'express'
import { BaseEntity } from 'typeorm'

import { HttpError } from '../../common/error'

export abstract class CrudBaseController<T> {
  readonly _entity: typeof BaseEntity

  constructor(entity) {
    this._entity = entity
  }

  findOne = async (req: Request, res: Response, next) => {
    try {
      const { params, query } = req
      const { include } = query

      const data = await this._entity.findOne(params.id, {
        ...(include && { relations: include.split(',') })
      })
      return (res.json(data) as unknown) as T
    } catch (error) {
      return next(new HttpError(500, `${error.name}: ${error.message}`))
    }
  }

  find = async (req: Request, res: Response, next): Promise<T[]> => {
    try {
      const { include } = req.query

      const data = await this._entity.find({
        ...(include && { relations: include.split(',') })
      })
      return (res.json(data) as unknown) as T[]
    } catch (error) {
      return next(new HttpError(500, `${error.name}: ${error.message}`))
    }
  }

  create = async (req: Request, res: Response, next) => {
    try {
      const data = await this._entity.save(req.body)
      return (res.json(data) as unknown) as T
    } catch (error) {
      return next(new HttpError(500, `${error.name}: ${error.message}`))
    }
  }

  delete = async (req: Request, res: Response, next) => {
    try {
      const { params } = req
      await this._entity.delete(params.id)
      return res.status(201).send()
    } catch (error) {
      return next(new HttpError(500, `${error.name}: ${error.message}`))
    }
  }

  update = async ({ body }: Request, res: Response, next): Promise<T> => {
    if (!body.id) {
      return next(
        new HttpError(
          422,
          `${this._entity.name}'s ID is missing! Please, check your payload.`
        )
      )
    }

    try {
      const data = await this._entity.save(body)
      return (res.json(data) as unknown) as T
    } catch (error) {
      return next(new HttpError(500, `${error.name}: ${error.message}`))
    }
  }
}
