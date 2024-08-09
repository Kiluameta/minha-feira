import OnboardingItem from "@/components/onboardingItem";
import React, { useRef, useState } from "react";
import { View, FlatList, useWindowDimensions } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  {
    id: "1",
    firstText: "Bem vindo(a)! 1",
    secondText: "",
  },
  {
    id: "2",
    firstText: "Bem vindo(a)! 2",
    secondText: "",
  },
  {
    id: "3",
    firstText: "Bem vindo(a)! 3",
    secondText: "",
  },
];

interface viewAbleItemsProps {
  viewableItems: {
    index: number | null;
  }[];
}

export default function Onboarding() {
  const { width, height } = useWindowDimensions();

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const listRef = useRef<FlatList>(null);
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const onViewableItemsChanged = useRef(
    ({ viewableItems }: viewAbleItemsProps) => {
      setCurrentIndex(viewableItems[0].index || 0);
    }
  ).current;

  const onScrollTo = () => {
    if (currentIndex < data.length - 1 && listRef.current) {
      listRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log("Fim do onboarding");
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

        marginVertical: 50,
        gap: 20,
      }}
    >
      <View style={{ flex: 3, backgroundColor: "red" }}>
        <FlatList
          ref={listRef}
          data={data}
          renderItem={({ item, index }) => (
            <OnboardingItem item={{ ...item, index }} />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          scrollEnabled={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewConfig}
        />
      </View>

      <View>
        <Button mode={"elevated"} dark={true} onPress={onScrollTo}>
          CONTINUAR
        </Button>
      </View>
    </SafeAreaView>
  );
}
