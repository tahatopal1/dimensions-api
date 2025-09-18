import {
  FlatList,
  Image,
  Pressable,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";

export default function App() {
  const items = [
    {
      place: "Vancouver, British Columbia",
      definition: "Pacific Innovations, 456 Ocean Avenue",
      img: require("./assets/places/british_columbia.jpg"),
    },
    {
      place: "Montreal, Quebec",
      definition: "Laurentian Solutions, 789 Rue de la Montagne",
      img: require("./assets/places/quebec.jpg"),
    },
    {
      place: "Calgary, Alberta",
      definition: "Prairie Technologies, 1010 Prairie Road",
      img: require("./assets/places/alberta.jpg"),
    },
  ];

  return (
    <View style={styles.appContainer}>
      <View>
        <Text style={styles.headerText}>Locations with Apprenticeships</Text>
        <Text style={styles.subHeaderText}>
          Manage and update your apprenticeship locations with ease
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Graphic Design Intern (m/f/d)</Text>
        <View style={styles.listContainer}>
          <FlatList
            data={items}
            renderItem={(itemData) => <ListItem {...itemData.item} />}
            keyExtractor={(_, index) => index.toString()}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      </View>
    </View>
  );
}

function ListItem({ place, definition, img }) {
  return (
    <Pressable style={styles.listItem}>
      <Image source={img} style={styles.itemImage} />
      <View style={styles.itemTextWrapper}>
        <Text style={styles.itemTitle}>{place}</Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.itemSubtitle}
        >
          {definition}
        </Text>
      </View>
    </Pressable>
  );
}

const deviceWidth = Dimensions.get("window").width;
const isSmallDevice = deviceWidth < 380;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: isSmallDevice ? 34 : 36,
    paddingTop: isSmallDevice ? 90 : 120,
  },
  headerText: {
    fontWeight: "600",
    fontSize: isSmallDevice ? 16 : 18,
    marginBottom: isSmallDevice ? 9 : 12,
    color: "#111",
  },
  subHeaderText: {
    color: "#6B7280",
    marginBottom: isSmallDevice ? 16 : 24,
    fontSize: isSmallDevice ? 12 : 14,
  },
  card: {
    backgroundColor: "#f6f6f6",
    padding: 4,
    alignSelf: "stretch",
    borderRadius: 16,
  },
  cardTitle: {
    fontSize: isSmallDevice ? 13 : 14,
    fontWeight: "600",
    color: "#111",
    paddingVertical: isSmallDevice ? 8 : 12,
    paddingLeft: isSmallDevice ? 10 : 12,
  },
  listContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#f2f2f2",
  },
  separator: {
    height: 2,
    width: "100%",
    backgroundColor: "#f6f6f6",
  },
  listItem: {
    flexDirection: "row",
    padding: 6,
    gap: 12,
  },
  itemImage: {
    width: isSmallDevice ? 48 : 52,
    height: isSmallDevice ? 48 : 52,
    borderRadius: 12,
  },
  itemTextWrapper: {
    gap: 4,
    alignSelf: "center",
  },
  itemTitle: {
    fontWeight: "600",
    color: "#111",
    fontSize: isSmallDevice ? 13 : 14,
  },
  itemSubtitle: {
    width: isSmallDevice ? 200 : 220,
    color: "#6B7280",
    fontWeight: "500",
    fontSize: 12,
  },
});
