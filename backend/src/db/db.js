const comments = [
  {content: 'Apple',stars:5,movieid:297764 ,id:"101"},
  {content: 'Banana',stars:1,movieid:1 ,id:"102"},
  {content: 'Orange',stars:1,movieid:1 ,id:"103"},
  {content: 'Melon',stars:1,movieid:1 ,id:"104"},
]

const User = [
  {userId:'1',favorite:[1,2]},
  {userId:'2',favorite:[3,4]}
]

const db = {
  comments,
  User
}

export { db as default }
