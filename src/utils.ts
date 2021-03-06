import { NewDiaryEntry, Weather } from './types'

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or mising comment')
  }
  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or mising date')
  }
  return dateFromRequest
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date)
  }
  return newEntry
}

export default toNewDiaryEntry
