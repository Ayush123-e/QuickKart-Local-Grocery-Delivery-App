import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width: screenWidth } = Dimensions.get("window");

export default function MainPage() {
    const [searchQuery, setSearchQuery] = useState("");

    // Banner images
    const bannerImages = [
        "https://cdn.pixabay.com/photo/2019/12/05/05/50/bread-4674349_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/08/06/19/06/food-2595291_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/03/02/20/13/grocery-1232944_1280.jpg",
        "https://images.unsplash.com/photo-1614907634002-65ac4cb74acb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGdyb2Nlcnl8ZW58MHx8MHx8fDA%3D"
    ];

    // Category data
    const categories = [
        {
            id: 1,
            name: "Milk, Curd &\nPaneer",
            image: "https://images.unsplash.com/photo-1634141510639-d691d86f47be?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFpcnklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            id: 2,
            name: "Pharma &\nWellness",
            image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=60",
        },
        {
            id: 3,
            name: "Vegetables\n& Fruits",
            image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=400&auto=format&fit=crop&q=60",
        },
        {
            id: 4,
            name: "Munchies",
            image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&auto=format&fit=crop&q=60",
        },
        {
            id: 5,
            name: "Home &\nOffice",
            image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&auto=format&fit=crop&q=60",
        },
        {
            id: 6,
            name: "Baby Care",
            image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&auto=format&fit=crop&q=60",
        },
        {
            id: 7,
            name: "Ata, Rice &\nDal",
            image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop&q=60",
        },
        {
            id: 8,
            name: "Cleaning\nEssentials",
            image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&auto=format&fit=crop&q=60",
        },
    ];

    // Bestseller products
    const bestsellers = [
        {
            id: 1,
            name: "Fresh Apples",
            price: "₹120",
            image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&auto=format&fit=crop&q=60",
        },
        {
            id: 2,
            name: "Organic Milk",
            price: "₹65",
            image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&auto=format&fit=crop&q=60",
        },
        {
            id: 3,
            name: "Brown Bread",
            price: "₹45",
            image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=60",
        },
    ];

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <View style={styles.deliveryInfo}>
                    <Text style={styles.deliveryLabel}>Delivery in</Text>
                    <Text style={styles.deliveryTime}>10 minutes</Text>
                    <Text style={styles.location}>Somewhere, Somewhere...</Text>
                </View>
                <TouchableOpacity style={styles.profileButton}>
                    <View style={styles.profileIcon}>
                        <Icon name="person" size={24} color="#666" />
                    </View>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search for ata, dal, coke"
                        placeholderTextColor="#999"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    <TouchableOpacity style={styles.micButton}>
                        <Ionicons name="mic-outline" size={20} color="#666" />
                    </TouchableOpacity>
                </View>

                {/* Image Banner with ScrollView */}
                <View style={styles.bannerContainer}>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        style={styles.bannerScrollView}
                    >
                        {bannerImages.map((image, index) => (
                            <View key={index} style={styles.bannerImageContainer}>
                                <Image
                                    source={{ uri: image }}
                                    style={styles.bannerImage}
                                />
                                {/* Overlay Text */}
                                <View style={styles.bannerTextOverlay}>
                                    <Text style={styles.bannerTitle}>FRESH GROCERIES</Text>
                                    <Text style={styles.bannerSubtitle}>
                                        Get fresh vegetables & fruits delivered to your doorstep!
                                    </Text>
                                    <TouchableOpacity style={styles.shopNowButton}>
                                        <Text style={styles.shopNowText}>Shop now</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                {/* Grocery & Kitchen Section */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Grocery & Kitchen</Text>

                    <View style={styles.categoriesGrid}>
                        {categories.map((category) => (
                            <TouchableOpacity
                                key={category.id}
                                style={styles.categoryCard}
                                activeOpacity={0.7}
                            >
                                <View style={styles.categoryImageContainer}>
                                    <Image
                                        source={{ uri: category.image }}
                                        style={styles.categoryImage}
                                    />
                                </View>
                                <Text style={styles.categoryName}>{category.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Bestsellers Section */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Bestsellers</Text>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.bestsellerScroll}
                    >
                        {bestsellers.map((product) => (
                            <TouchableOpacity
                                key={product.id}
                                style={styles.bestsellerCard}
                                activeOpacity={0.7}
                            >
                                <Image
                                    source={{ uri: product.image }}
                                    style={styles.bestsellerImage}
                                />
                                <Text style={styles.bestsellerName}>{product.name}</Text>
                                <Text style={styles.bestsellerPrice}>{product.price}</Text>
                                <TouchableOpacity style={styles.addButton}>
                                    <Text style={styles.addButtonText}>ADD</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    header: {
        backgroundColor: "#fff",
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0",
    },
    deliveryInfo: {
        flex: 1,
    },
    deliveryLabel: {
        fontSize: 12,
        color: "#666",
    },
    deliveryTime: {
        fontSize: 20,
        fontWeight: "700",
        color: "#1a1a1a",
        marginVertical: 2,
    },
    location: {
        fontSize: 14,
        color: "#666",
    },
    profileButton: {
        padding: 5,
    },
    profileIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#f0f0f0",
        justifyContent: "center",
        alignItems: "center",
    },
    scrollView: {
        flex: 1,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 15,
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: "#1a1a1a",
    },
    micButton: {
        padding: 5,
    },
    bannerContainer: {
        paddingHorizontal: 20,
        marginBottom: 20,
        height: 200,
    },
    bannerScrollView: {
        borderRadius: 16,
        overflow: 'hidden',
    },
    bannerImageContainer: {
        width: screenWidth - 40,
        height: 200,
        position: 'relative',
    },
    bannerImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    bannerTextOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        padding: 20,
        justifyContent: 'center',
    },
    bannerTitle: {
        fontSize: 24,
        fontWeight: "800",
        color: "#fff",
        marginBottom: 8,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
    bannerSubtitle: {
        fontSize: 14,
        color: "#fff",
        marginBottom: 15,
        lineHeight: 20,
        opacity: 0.95,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
    shopNowButton: {
        backgroundColor: "#4CAF50",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignSelf: "flex-start",
    },
    shopNowText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "700",
    },
    sectionContainer: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "700",
        color: "#1a1a1a",
        marginBottom: 15,
        paddingHorizontal: 20,
    },
    categoriesGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: 12,
    },
    categoryCard: {
        width: (screenWidth - 48) / 4,
        marginHorizontal: 4,
        marginBottom: 15,
        alignItems: "center",
    },
    categoryImageContainer: {
        width: "100%",
        aspectRatio: 1,
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 8,
        marginBottom: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 3,
        elevation: 2,
    },
    categoryImage: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
        resizeMode: "cover",
    },
    categoryName: {
        fontSize: 11,
        textAlign: "center",
        color: "#333",
        lineHeight: 14,
        fontWeight: "500",
    },
    bestsellerScroll: {
        paddingLeft: 20,
    },
    bestsellerCard: {
        width: 140,
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 10,
        marginRight: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    bestsellerImage: {
        width: "100%",
        height: 120,
        borderRadius: 8,
        marginBottom: 8,
        resizeMode: "cover",
    },
    bestsellerName: {
        fontSize: 14,
        fontWeight: "600",
        color: "#1a1a1a",
        marginBottom: 4,
    },
    bestsellerPrice: {
        fontSize: 16,
        fontWeight: "700",
        color: "#4CAF50",
        marginBottom: 8,
    },
    addButton: {
        backgroundColor: "#4CAF50",
        paddingVertical: 8,
        borderRadius: 6,
        alignItems: "center",
    },
    addButtonText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "700",
    },
});