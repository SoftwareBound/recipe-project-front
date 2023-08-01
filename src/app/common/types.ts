export interface Recipe {
  name: string;
  preperationTime: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
  tags: string[];
  description: string;
}

export type Ingredient = {
  name: string;
  amount: number;
  amountType?: string;
  optional?: boolean;
};

export type Instruction = {
  title: string;
  content: string[];
};
