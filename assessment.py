# **Ancestral Stories:** In many African cultures, the art of storytelling is passed
# down from generation to generation. Imagine you're creating an application that
# records these oral stories and translates them into different languages. The
# stories vary by length, moral lessons, and the age group they are intended for.
# Think about how you would model `Story`, `StoryTeller`, and `Translator`
# objects, and how inheritance might come into play if there are different types of
# stories or storytellers.




class Story:
    def __init__(self, length, moral_lesson, age_group):
        self.length= length
        self.moral_lesson = moral_lesson
        self.age_group = age_group

    def get_length(self):
        return len(self.content)

    def display(self):
        print(f"this is book is called: {self.title}")
        print(f"and it mainly talks about: {self.content}")
        print(f"some of the lessons to learn from it includes: {self.moral_lesson}")
        print(f"it was written for people of age group ranged between: {self.age_group}")

class StoryTeller:
    def __init__(self, name, language):
        self.name = name
        self.language = language

    def tell_story(self, story):
        print(f"Storyteller: {self.name}")
        print(f"Language: {self.language}")
        story.display()


# 2. **African Cuisine:** You're creating a recipe app specifically for African cuisine.
# The app needs to handle recipes from different African countries, each with its
# unique ingredients, preparation time, cooking method, and nutritional
# information. Consider creating a `Recipe` class, and think about how you might
# create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
# `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
# methods.


class Recipe:


  def __init__(self, name, ingredients, preparation_time, cooking_method, nutritional_information):
   

  
    self.name = name
    self.ingredients = ingredients
    self.preparation_time = preparation_time
    self.cooking_method = cooking_method
    self.nutritional_information = nutritional_information

  def __repr__(self):

    return f"Recipe({self.name}, {self.ingredients}, {self.preparation_time}, {self.cooking_method}, {self.nutritional_information})"

class MoroccanRecipe(Recipe):
 

  def __init__(self, name, ingredients, preparation_time, cooking_method, nutritional_information, cuisine):
   

 
    super().__init__(name, ingredients, preparation_time, cooking_method, nutritional_information)
    self.cuisine = cuisine

recipe = MoroccanRecipe(
  name="Moroccan Bread",
  ingredients=["flour", "yeast", "cooking oil"],
  preparation_time=3,
  cooking_method="Baking",
  nutritional_information={"Calories": 200, "Fat": 10, "Protein": 5, "Carbohydrates": 25},
  cuisine="Moroccan"
)

print(recipe)


class Product:
  

  def __init__(self, name, price, quantity):
 

    self.name = name
    self.price = price
    self.quantity = quantity

  def total_value(self):
    return self.price * self.quantity



product1 = Product(
  name="Banana",
  price=1,
  quantity=1,
)

product2 = Product(
  name="Apple",
  price=2,
  quantity=2,
)

product3 = Product(
  name="Orange",
  price=3,
  quantity=3,
)


print(product1.total_value())  
print(product2.total_value())  
print(product3.total_value())  
    

