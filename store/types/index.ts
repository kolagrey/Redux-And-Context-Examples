export type User = {
  name: string;
  points: number;
};

export type State = {
  counter: number;
  users: Array<User>;
};

export type AuthState = {
  isLogin: boolean;
  user: string | null;
};

export type Dict = {
  [key: string]: [value: string | number | Dict | Array<any>];
};

export type ActionType = {
  type: string;
  payload: Dict;
};
