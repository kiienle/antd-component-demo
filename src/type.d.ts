interface IUser {
    id: number
    title: string
    body: string
  }
  
  type UserState = {
    users: IUser[]
  }
  
  type UserAction = {
    type: string
    user: IUser
  }
  
  type DispatchType = (args: UserAction) => UserAction