import React from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Buttons from "../../components/Buttons";

import CartProductItem from "../../components/CartProductItem";
import products from "../../data/cart";
import product from "../../data/product";

const ShoopingCartScreen = () => {
  const totalPrice = products.reduce(
    (sum, item) => sum + item.item.price * item.quantity,
    0
  );

  return (
    <SafeAreaView>
      <FlatList
        data={products}
        renderItem={({ item }) => <CartProductItem cartItem={item} />}
        ListHeaderComponent={() => (
          <View style={{ backgroundColor: "white", padding: 15 }}>
            <Text style={{ fontSize: 18 }}>
              Subtotal ({products.length} items):
              <Text style={{ color: "#e47911", fontWeight: "bold" }}>
                € {totalPrice.toFixed(2)}
              </Text>
            </Text>
            <Buttons
              text="Proceed to checkout"
              onPress={() => console.warn("go to checkout")}
              containerStyles={{
                backgroundColor: "#f7e300",
                borderColor: "#c7b702",
                marginVertical: 10,
              }}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ShoopingCartScreen;