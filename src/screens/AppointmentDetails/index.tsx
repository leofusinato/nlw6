import React from "react";

import { styles } from "./styles";
import { ImageBackground, Text, View, FlatList } from "react-native";

import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";
import { Member } from "../../components/Member";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";

import BannerImg from "../../assets/banner.png";

export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      username: "Leonardo",
      avatar_url: "https://github.com/leofusinato.png",
      status: "online",
    },
    {
      id: "2",
      username: "Camille Linda",
      avatar_url:
        "https://scontent.fbnu1-1.fna.fbcdn.net/v/t1.6435-9/177006867_2859654680939510_4161136418871908859_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=lqVVcjvlnDsAX-cpaMP&_nc_ht=scontent.fbnu1-1.fna&oh=0a9a3a2cfdfe443e2973173ca6711691&oe=60D9CA91",
      status: "offline",
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
