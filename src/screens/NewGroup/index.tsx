import { Container, Content, ICon } from "./styles";
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";
import { useNavigation } from "@react-navigation/native";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export function NewGroup() {
  const [group, setGroup] = useState<string>("");

  const navigation = useNavigation();

  async function handleNew() {
    try {
      if (group.trim().length === 0) {
        Alert.alert("Novo Grupo", "informe o tamanho da turma");
        return;
      }

      await groupCreate(group);
      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo grupo", error.message);
        return;
      }

      Alert.alert("Novo grupo", "Não foi possível criar um grupo!");
      console.log(error);
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <ICon />
        <Highlight
          title="Nova Turma"
          subTitle="Crie a sua turma para adicionar pessoas"
        />
        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button style={{ marginTop: 20 }} title="Criar" onPress={handleNew} />
      </Content>
    </Container>
  );
}
