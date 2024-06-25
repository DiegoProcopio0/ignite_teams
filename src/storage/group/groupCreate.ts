import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storeConfig";
import { groupsGetAll } from "./groupsGetAll";
import { AppError } from "@utils/AppError";

export async function groupCreate(newGroup: string) {
  try {
    const storageGroups = await groupsGetAll();

    const groupALreadyExists = storageGroups.includes(newGroup);

    if (groupALreadyExists) {
      throw new AppError("Já existe um grupo cadastrado com esse nome!");
    }

    const storage = JSON.stringify([...storageGroups, newGroup]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
