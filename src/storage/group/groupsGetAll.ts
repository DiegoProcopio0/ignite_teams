import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storeConfig";

export async function groupsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);

    if (!storage) {
      return [];
    }

    const groups: string[] = await JSON.parse(storage);

    return groups;
  } catch (error) {
    throw error;
  }
}
