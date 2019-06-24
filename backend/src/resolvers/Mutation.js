import uuidv4 from 'uuid/v4'

const Mutation = {
  createComment (){
    return {content: 'Apple',stars:1,movieid:1}
  }
}

export { Mutation as default }
