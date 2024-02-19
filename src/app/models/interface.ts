export interface Place {
    id: number;
    name: string;
    address: string;
    country: string;
}

export interface UserInfo {
    id: number;
    name: string;
    lastname: string;
    email: string;
    token: string;
  }

  export interface Products{
    id: number;
    name: string;
    description: string;
    price: number;
  }