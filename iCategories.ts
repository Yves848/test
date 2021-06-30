export interface iCateg  {
  name: string,
  subCategories?: iCateg[]
  parent? : iCateg;
}

