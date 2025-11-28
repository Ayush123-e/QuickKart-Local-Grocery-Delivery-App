import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    SectionList,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const GROCERY_DATA = [
    {
        title: "Popular",
        data: [
            {
                name: "Avocado",
                price: "₹120",
                weight: "each",
                image: "https://placehold.co/150/90EE90/FFFFFF?text=Avocado",
            },
            {
                name: "Bananas",
                price: "₹60",
                weight: "dozen",
                image: "https://placehold.co/150/FFD93D/FFFFFF?text=Banana",
            },
            {
                name: "Milk",
                price: "₹70",
                weight: "1 L",
                image: "https://placehold.co/150/74B9FF/FFFFFF?text=Milk",
            },
            {
                name: "Bread",
                price: "₹50",
                weight: "loaf",
                image: "https://placehold.co/150/F5CBA7/FFFFFF?text=Bread",
            },
        ],
    },
    {
        title: "Fruits",
        data: [
            {
                name: "Apples",
                price: "₹180",
                weight: "1 kg",
                image: "https://placehold.co/150/FF6B6B/FFFFFF?text=Apple",
            },
            {
                name: "Oranges",
                price: "₹150",
                weight: "1 kg",
                image: "https://placehold.co/150/FF9F43/FFFFFF?text=Orange",
            },
            {
                name: "Grapes",
                price: "₹120",
                weight: "500g",
                image: "https://placehold.co/150/6C5CE7/FFFFFF?text=Grape",
            },
            {
                name: "Berries",
                price: "₹300",
                weight: "pack",
                image: "https://placehold.co/150/E84393/FFFFFF?text=Berry",
            },
        ],
    },
    {
        title: "Vegetables",
        data: [
            {
                name: "Carrots",
                price: "₹60",
                weight: "1 kg",
                image: "https://placehold.co/150/E17055/FFFFFF?text=Carrot",
            },
            {
                name: "Broccoli",
                price: "₹80",
                weight: "head",
                image: "https://placehold.co/150/00B894/FFFFFF?text=Broccoli",
            },
            {
                name: "Spinach",
                price: "₹40",
                weight: "bunch",
                image: "https://placehold.co/150/55EFC4/FFFFFF?text=Spinach",
            },
            {
                name: "Potatoes",
                price: "₹50",
                weight: "1 kg",
                image: "https://placehold.co/150/B2BEC3/FFFFFF?text=Potato",
            },
        ],
    },
    {
        title: "Dairy & Eggs",
        data: [
            {
                name: "Milk",
                price: "₹70",
                weight: "1 L",
                image: "https://placehold.co/150/74B9FF/FFFFFF?text=Milk",
            },
            {
                name: "Cheese",
                price: "₹250",
                weight: "block",
                image: "https://placehold.co/150/FAB1A0/FFFFFF?text=Cheese",
            },
            {
                name: "Yogurt",
                price: "₹40",
                weight: "cup",
                image: "https://placehold.co/150/A29BFE/FFFFFF?text=Yogurt",
            },
            {
                name: "Eggs",
                price: "₹90",
                weight: "dozen",
                image: "https://placehold.co/150/FFEAA7/FFFFFF?text=Eggs",
            },
        ],
    },
    {
        title: "Bakery",
        data: [
            {
                name: "Bread",
                price: "₹50",
                weight: "loaf",
                image: "https://placehold.co/150/F5CBA7/FFFFFF?text=Bread",
            },
            {
                name: "Bagels",
                price: "₹150",
                weight: "6 pack",
                image: "https://placehold.co/150/E67E22/FFFFFF?text=Bagel",
            },
            {
                name: "Croissants",
                price: "₹200",
                weight: "4 pack",
                image: "https://placehold.co/150/D35400/FFFFFF?text=Croissant",
            },
        ],
    },
    {
        title: "Snacks",
        data: [
            {
                name: "Chips",
                price: "₹40",
                weight: "bag",
                image: "https://placehold.co/150/FF7675/FFFFFF?text=Chips",
            },
            {
                name: "Popcorn",
                price: "₹60",
                weight: "bag",
                image: "https://placehold.co/150/FDCB6E/FFFFFF?text=Popcorn",
            },
            {
                name: "Cookies",
                price: "₹100",
                weight: "pack",
                image: "https://placehold.co/150/6C5CE7/FFFFFF?text=Cookie",
            },
        ],
    },
    {
        title: "Beverages",
        data: [
            {
                name: "Orange Juice",
                price: "₹150",
                weight: "1 L",
                image: "https://placehold.co/150/FFA502/FFFFFF?text=Juice",
            },
            {
                name: "Soda",
                price: "₹90",
                weight: "2 L",
                image: "https://placehold.co/150/FF6348/FFFFFF?text=Soda",
            },
            {
                name: "Water",
                price: "₹40",
                weight: "1 L",
                image: "https://placehold.co/150/74B9FF/FFFFFF?text=Water",
            },
        ],
    },
];

const CATEGORIES = [
    {
        name: "All",
        image: "https://placehold.co/100/95a5a6/FFFFFF?text=All",
        color: "#F2F3F4",
    },
    {
        name: "Popular",
        image: "https://placehold.co/100/f39c12/FFFFFF?text=Pop",
        color: "#FEF5E7",
    },
    {
        name: "Fruits",
        image: "https://placehold.co/100/e74c3c/FFFFFF?text=F",
        color: "#FDEDEC",
    },
    {
        name: "Vegetables",
        image: "https://placehold.co/100/2ecc71/FFFFFF?text=V",
        color: "#E8F8F5",
    },
    {
        name: "Dairy & Eggs",
        image: "https://placehold.co/100/3498db/FFFFFF?text=D",
        color: "#EBF5FB",
    },
    {
        name: "Bakery",
        image: "https://placehold.co/100/f1c40f/FFFFFF?text=B",
        color: "#FEF9E7",
    },
    {
        name: "Snacks",
        image: "https://placehold.co/100/9b59b6/FFFFFF?text=S",
        color: "#F4ECF7",
    },
    {
        name: "Beverages",
        image: "https://placehold.co/100/34495e/FFFFFF?text=Dr",
        color: "#EBEDEF",
    },
];

const GroceryList = () => {
    const [searchText, setSearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredData = GROCERY_DATA.map((section) => {
        // Filter by selected category first
        if (selectedCategory !== "All" && section.title !== selectedCategory) {
            return null;
        }

        // Then filter by search text within the selected category's data
        const filteredItems = section.data.filter((item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
        );

        if (filteredItems.length === 0) return null;

        return { ...section, data: filteredItems };
    }).filter((section) => section !== null);

    const renderItem = ({ item }) => (
        <View style={styles.itemCard}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>
                    {item.price} <Text style={styles.itemWeight}>/ {item.weight}</Text>
                </Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
                <Ionicons name="add" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    );

    const ListHeader = () => (
        <View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Grocery Shopping</Text>
                <View style={styles.searchBar}>
                    <Ionicons
                        name="search"
                        size={20}
                        color="#888"
                        style={styles.searchIcon}
                    />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search"
                        value={searchText}
                        onChangeText={setSearchText}
                        placeholderTextColor="#888"
                    />
                </View>
            </View>

            <View style={styles.bannerContainer}>
                <View style={styles.bannerTextContainer}>
                    <Text style={styles.bannerTitle}>20% OFF</Text>
                    <Text style={styles.bannerSubtitle}>on your first order</Text>
                </View>
                <Image
                    source={{ uri: "https://placehold.co/200/F1C40F/FFFFFF?text=Veg" }}
                    style={styles.bannerImage}
                />
            </View>

            <Text style={styles.sectionTitle}>Categories</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.categoriesScroll}
            >
                {CATEGORIES.map((cat, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.categoryCard,
                            { backgroundColor: cat.color },
                            selectedCategory === cat.name && styles.selectedCategoryCard,
                        ]}
                        onPress={() => setSelectedCategory(cat.name)}
                    >
                        <Image source={{ uri: cat.image }} style={styles.categoryImage} />
                        <Text style={styles.categoryName}>{cat.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search items..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Section List */}
      <SectionList
        sections={filteredData}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  searchContainer: {
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    zIndex: 1,
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  header: {
    backgroundColor: "#f8f9fa",
    paddingVertical: 12,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  item: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginVertical: 6,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    color: "#34495e",
  },
});

export default GroceryList;
