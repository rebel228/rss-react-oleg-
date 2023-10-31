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

export interface ISearchProps {
  findCharacter: (data: IcharacterSchema[]) => void;
  signRequest: (reqStatus: boolean) => void;
  toggleLoad: () => void;
}

export interface ICardsProps {
  data: IcharacterSchema[];
  isLoading: boolean;
  isSuccessRequest: boolean;
}
