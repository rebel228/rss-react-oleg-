export interface IcharacterSchema {
  id: string;
  name: string;
  images: string[];
  personal: IPersonalCharacter;
}

export interface IPersonalCharacter {
  clan: string;
  sex: string;
}
