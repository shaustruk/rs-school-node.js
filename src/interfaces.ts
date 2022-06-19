export interface IHobbies {
  [index: number]: string;
}

export interface IUSER {
  id?: string;
  username: string;
  age: number;
  hobbies: IHobbies;
}
