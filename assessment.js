class Story {
    constructor( length, moralLesson, ageGroup) {
      this.length = length;
      this.moralLesson = moralLesson;
      this.ageGroup = ageGroup;
    }
  }
class Storyteller {
    constructor(name, stories) {
      this.name = name;
      this.stories = stories;
    }


tellStory(story) {
    print("this is a story of a dog and a cat")
  }
}
class Translator {
    constructor(sourceLanguage, targetLanguage) {
      this.sourceLanguage = sourceLanguage;
      this.targetLanguage = targetLanguage;
    }
}


class Legend extends Story {
    constructor(title, author, length, moralLesson, ageGroup) {
      super(title, author, length, moralLesson, ageGroup);
      this.author = author;
    }
  }

//   # 2. **African Cuisine:** You're creating a recipe app specifically for African cuisine.
//   # The app needs to handle recipes from different African countries, each with its
//   # unique ingredients, preparation time, cooking method, and nutritional
//   # information. Consider creating a `Recipe` class, and think about how you might
//   # create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
//   # `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
//   # methods.


class Recipe {
    constructor( ingredients, preparationTime, cookingMethod, nutritionalInformation) {
    
      this.ingredients = ingredients;
      this.preparationTime = preparationTime;
      this.cookingMethod = cookingMethod;
      this.nutritionalInformation = nutritionalInformation;
    }
  
  
    get totalProtein() {
      return this.nutritionalInformation.protein;
    }
  
    
  
    printRecipe() {
      console.log(`
      Ingredients: ${this.ingredients.join(", ")}
      Preparation time: ${this.preparationTime} minutes
      Cooking method: ${this.cookingMethod}
      Nutritional information
        Protein: ${this.totalProtein}

      `);
    }
  }
  
  class MoroccanRecipe extends Recipe {
    constructor(name, ingredients, preparationTime, cookingMethod, nutritionalInformation, cuisine) {
      super( ingredients, preparationTime, cookingMethod, nutritionalInformation);
   
    }
  
    printRecipe() {
      super.printRecipe();
      console.log(`
      Cuisine: ${this.cuisine}
      `);
    }
  }
  
  class EthiopianRecipe extends Recipe {
    constructor(name, ingredients, preparationTime, cookingMethod, nutritionalInformation, cuisine) {
      super( ingredients, preparationTime, cookingMethod, nutritionalInformation);
      this.cuisine = cuisine;
    }
  
    printRecipe() {
      super.printRecipe();
      console.log(`
      Cuisine: ${this.cuisine}
      `);
    }
  }
  
  class NigerianRecipe extends Recipe {
    constructor( ingredients, preparationTime, cookingMethod, nutritionalInformation) {
      super( ingredients, preparationTime, cookingMethod, nutritionalInformation);
      
    }
  
    printRecipe() {
      super.printRecipe();
      console.log(`
      Cuisine: ${this.cuisine}
      `);
    }
  }
  
  const ingredients = ["flour", "yeast", "cooking oil"];
  const preparationTime = 3;
  const cookingMethod = "Baking";
  const nutritionalInformation = {
    calories: 500,
    fat: 20,
    protein: 4,
    carbohydrates: 5
  };
  
  const recipe = new MoroccanRecipe(
  
    ingredients,
    preparationTime,
    cookingMethod,
    nutritionalInformation,

  );
  
  recipe.printRecipe();



  class Product {
    constructor(fruit, price, quantity) {
      this.fruit = fruit;
      this.price = price;
      this.quantity = quantity;
    }
  
    get totalValue() {
      return this.price * this.quantity;
    }
  }
  
  const product1 = new Product(
    fruit= "Banana",
    price= 1,
    quantity= 1
  );
  
  const product2 = new Product(
    fruit = "Apple",
    price = 2,
    quantity= 2
  );
  
  const product3 = new Product(
    fruit= "Orange",
    price= 3,
    quantity=3
  );
  
  console.log(product1.totalValue); 
  console.log(product2.totalValue); 
  console.log(product3.totalValue);