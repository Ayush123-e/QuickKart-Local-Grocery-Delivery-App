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
        title: "Fruits",
        data: [
            { name: "Apples", price: "₹99", weight: "1 kg", image: "https://www.amazon.in/Fresh-Apple-Royal-Gala-Pieces/dp/B07BG7KKG1", color: "#FFE0E0" },
            { name: "Bananas", price: "₹149", weight: "1 bunch", image: "https://www.eatthis.com/benefits-of-bananas/", color: "#FFF5CC" },
            { name: "Oranges", price: "₹399", weight: "1 kg", image: "https://www.allrecipes.com/article/types-of-oranges/", color: "#FFEACC" },
            { name: "Grapes", price: "₹499", weight: "500g", image: "https://snaped.fns.usda.gov/resources/nutrition-education-materials/seasonal-produce-guide/grapes", color: "#E0DBFF" },
        ],
    },
    {
        title: "Vegetables",
        data: [
            { name: "Carrots", price: "₹199", weight: "1 kg", image: "https://placehold.co/150/E17055/FFFFFF?text=Carrot", color: "#FFDDC1" },
            { name: "Broccoli", price: "₹249", weight: "1 head", image: "https://placehold.co/150/00B894/FFFFFF?text=Broccoli", color: "#C8F7C5" },
            { name: "Spinach", price: "$1.99", weight: "1 bunch", image: "https://placehold.co/150/55EFC4/FFFFFF?text=Spinach", color: "#D5FFF3" },
        ],
    },
    {
        title: "Dairy",
        data: [
            { name: "Milk", price: "₹349", weight: "1 L", image: "https://placehold.co/150/74B9FF/FFFFFF?text=Milk", color: "#E3F2FD" },
            { name: "Cheese", price: "₹599", weight: "200g", image: "https://placehold.co/150/FAB1A0/FFFFFF?text=Cheese", color: "#FFE0B2" },
        ],
    },
    {
        title: "Snacks",
        data: [
            { name: "Chips", price: "₹299", weight: "150g", image: "https://placehold.co/150/FF7675/FFFFFF?text=Chips", color: "#FFCDD2" },
            { name: "Cookies", price: "₹399", weight: "200g", image: "https://placehold.co/150/A29BFE/FFFFFF?text=Cookie", color: "#E1BEE7" },
        ],
    },
];

const GroceryList = () => {
    const [searchText, setSearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredData = GROCERY_DATA.map((section) => {
        // Filter by category first
        if (selectedCategory !== "All" && section.title !== selectedCategory) {
            return null;
        }

        const filteredItems = section.data.filter((item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
        );

        if (filteredItems.length === 0) return null;

        return { ...section, data: filteredItems };
    }).filter((section) => section !== null);

    const renderItem = ({ item }) => (
        <View style={styles.cardContainer}>
            <View style={[styles.card, { backgroundColor: item.color }]}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.infoContainer}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemWeight}>{item.weight}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.itemPrice}>{item.price}</Text>
                        <TouchableOpacity style={styles.addButton}>
                            <Ionicons name="add" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
            <View style={styles.headerContainer}>
                <View style={styles.searchBar}>
                    <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search for items..."
                        value={searchText}
                        onChangeText={setSearchText}
                        placeholderTextColor="#888"
                    />
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
                    {["All", "Fruits", "Vegetables", "Dairy", "Snacks"].map((cat, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.categoryPill,
                                selectedCategory === cat && styles.selectedCategoryPill
                            ]}
                            onPress={() => setSelectedCategory(cat)}
                        >
                            <Text style={[
                                styles.categoryText,
                                selectedCategory === cat && styles.selectedCategoryText
                            ]}>{cat}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <SectionList
                sections={filteredData}
                keyExtractor={(item, index) => item.name + index}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionHeader}>{title}</Text>
                )}
                contentContainerStyle={styles.listContent}
                stickySectionHeadersEnabled={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    headerContainer: {
        padding: 16,
        backgroundColor: "#fff",
    },
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f0f2f5",
        borderRadius: 12,
        paddingHorizontal: 12,
        height: 48,
        marginBottom: 16,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: "#333",
    },
    categoriesScroll: {
        flexDirection: "row",
    },
    categoryPill: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: "#fff",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#e0e0e0",
        marginRight: 8,
    },
    selectedCategoryPill: {
        backgroundColor: "#007AFF",
        borderColor: "#007AFF",
    },
    categoryText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#333",
    },
    selectedCategoryText: {
        color: "#fff",
    },
    listContent: {
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#1a1a1a",
        marginTop: 20,
        marginBottom: 12,
    },
    cardContainer: {
        marginBottom: 16,
        width: '48%', // For grid-like feel if we wrapped, but SectionList is vertical. Let's keep it full width or make it look like the image.
        // The image showed a horizontal scroll or grid. Let's stick to vertical list for now but make the cards nice.
        // Actually, let's make it full width for the list item but styled nicely.
        width: '100%',
    },
    card: {
        flexDirection: "row",
        borderRadius: 16,
        padding: 12,
        alignItems: "center",
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 12,
        marginRight: 16,
    },
    infoContainer: {
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 4,
    },
    itemWeight: {
        fontSize: 14,
        color: "#666",
        marginBottom: 8,
    },
    priceContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    addButton: {
        backgroundColor: "#007AFF",
        padding: 8,
        borderRadius: 8,
    },
});

export default GroceryList;
