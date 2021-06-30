export interface iCateg  {
  id?: number;
  name: string,
  subCategories?: iCateg[]
  parent? : iCateg;
}

