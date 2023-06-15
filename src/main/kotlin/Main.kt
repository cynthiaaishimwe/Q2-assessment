open class Recipe(
    val ingredients: List<String>,
    val preparationTime: Int,
    val cookingMethod: String,
    val nutritionalInformation: Map<String, String>
) {
    fun display() {
        println("Ingredients: ${ingredients.joinToString(", ")}")
        println("Preparation Time: $preparationTime minutes")
        println("Cooking Method: $cookingMethod")
        println("Nutritional Information:")
        for ((key, value) in nutritionalInformation) {
            println("$key: $value")
        }
    }
}
class MoroccanRecipe(
    ingredients: List<String>,
    preparationTime: Int,
    cookingMethod: String,
    nutritionalInformation: Map<String, String>,
    val spiceLevel: String
) : Recipe(ingredients, preparationTime, cookingMethod, nutritionalInformation) {
    fun displayMoroccanInfo() {
        display()
        println("Spice Level: $spiceLevel")
    }
}
class EthiopianRecipe(
    ingredients: List<String>,
    preparationTime: Int,
    cookingMethod: String,
    nutritionalInformation: Map<String, String>,
    val injeraType: String
) : Recipe(ingredients, preparationTime, cookingMethod, nutritionalInformation) {
    fun displayEthiopianInfo() {
        display()
        println("Injera Type: $injeraType")
    }
}
class NigerianRecipe(
    ingredients: List<String>,
    preparationTime: Int,
    cookingMethod: String,
    nutritionalInformation: Map<String, String>,
    val soupType: String
) : Recipe(ingredients, preparationTime, cookingMethod, nutritionalInformation) {
    fun displayNigerianInfo() {
        display()
        println("Soup Type: $soupType")
    }
}
fun main() {
    val moroccanRecipe = MoroccanRecipe(
        listOf("Flour", "Yeast", "Cooking Oil"),
        1,
        "Baking",
        mapOf("Calories" to "300", "Protein" to "10g"),
        "Medium"
    )
    moroccanRecipe.displayMoroccanInfo()

    println()

    val ethiopianRecipe = EthiopianRecipe(
        listOf("Flour", "Yeast", "Cooking Oil"),
        60,
        "Grilling",
        mapOf("Calories" to "400", "Protein" to "15g"),
        "Teff Injera"
    )
    ethiopianRecipe.displayEthiopianInfo()

    println()

    val nigerianRecipe = NigerianRecipe(
        listOf("onions", "tomatoes", "meat"),
        30,
        "Boiling",
        mapOf("Calories" to "500", "Protein" to "20g"),
        "Egusi Soup"
    )
    nigerianRecipe.displayNigerianInfo()
}

class Product(
    val name: String,
    val price: Int,
    val quantity: Int
) {

    fun totalValue() = price * quantity
}

fun main(args: Array<String>) {

    val product1 = Product(
        name = "Banana",
        price = 1,
        quantity = 1
    )

    val product2 = Product(
        name = "Apple",
        price = 2,
        quantity = 2
    )

    val product3 = Product(
        name = "Orange",
        price = 3,
        quantity = 3
    )

    println(product1.totalValue())
    println(product2.totalValue())
    println(product3.totalValue())
}





